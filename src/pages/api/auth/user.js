import jwt from "jsonwebtoken";

export default function handler(req, res) {
  const token = req.cookies.authToken;

  if (!token) {
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return res.status(200).json({ user: decoded });
  } catch (error) {
    console.error("JWT verification error:", error);
    return res.status(401).json({ message: "Unauthorized" });
  }
}
