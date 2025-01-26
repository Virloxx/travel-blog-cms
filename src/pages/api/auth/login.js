import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

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
    const user = await prisma.user.findUnique({
      where: { login },
      include: {
        userInfo: true,
      },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid login credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid login credentials" });
    }

    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is not set in the environment variables");
      return res.status(500).json({ message: "Internal server error" });
    }

    const token = jwt.sign(
      {
        id: user.id,
        login: user.login,
        name: user.userInfo.name,
        isAdmin: user.userInfo.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.setHeader(
      "Set-Cookie",
      serialize("authToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 3600,
      })
    );

    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        name: user.userInfo.name,
        isAdmin: user.userInfo.isAdmin,
        profilePicUrl: user.userInfo.profilePicUrl,
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
