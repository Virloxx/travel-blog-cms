import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const miscInfo = await prisma.misc_Info.findMany({
        select: {
          key: true,
          value: true,
        },
      });
      res.status(200).json(miscInfo);
    } catch (error) {
      res.status(500).json({ error: "Something went wrong" });
    }
  } else if (req.method === "POST") {
    const { key, value } = req.body;

    if (!key || !value) {
      return res.status(400).json({ error: "Key and value are required" });
    }

    try {
      const updatedRecord = await prisma.misc_Info.updateMany({
        where: { key },
        data: { value },
      });

      if (updatedRecord.count === 0) {
        return res.status(404).json({ error: `No record found for key: ${key}` });
      }

      res.status(200).json({ message: "Record updated successfully" });
    } catch (error) {
      console.error("Failed to update record:", error);
      res.status(500).json({ error: "Failed to update record" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
