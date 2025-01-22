import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { login, password, name, profilePicUrl } = req.body;

  if (!login || !password || !name) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({
      where: { login },
    });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Hash the password
    const passwordHash = bcrypt.hashSync(password, 10);

    // Create the user and associated UserInfo
    const newUser = await prisma.user.create({
      data: {
        login,
        passwordHash,
        userInfo: {
          create: {
            name,
            profilePicUrl: profilePicUrl || null,
          },
        },
      },
    });

    return res.status(201).json({
      message: "User created successfully",
      user: {
        id: newUser.id,
        login: newUser.login,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
