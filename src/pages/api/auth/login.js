import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { login, password } = req.body;

  if (!login || !password) {
    return res.status(400).json({ message: "Login and password are required" });
  }

  try {
    // Find the user by login
    const user = await prisma.user.findUnique({
      where: { login },
      include: {
        userInfo: true,
      },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid login or password" });
    }

    // Verify the password
    const isPasswordValid = bcrypt.compareSync(password, user.passwordHash);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid login or password" });
    }

    // Create a JWT token
    const token = jwt.sign(
      {
        id: user.id,
        login: user.login,
        name: user.userInfo.name,
        isAdmin: user.userInfo.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // Token valid for 1 hour
    );

    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        name: user.userInfo.name,
        isAdmin: user.userInfo.isAdmin,
        profilePicUrl: user.userInfo.profilePicUrl,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
