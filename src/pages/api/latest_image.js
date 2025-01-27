import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "GET") {
    const uploadsDir = path.join(process.cwd(), "public/uploads");

    try {
      const files = fs.readdirSync(uploadsDir);

      if (files.length === 0) {
        return res.status(404).json({ error: "No files found in uploads directory" });
      }

      const sortedFiles = files
        .map((fileName) => ({
          name: fileName,
          time: fs.statSync(path.join(uploadsDir, fileName)).mtime.getTime(),
        }))
        .sort((a, b) => b.time - a.time);

      res.status(200).json({ fileName: sortedFiles[0].name });
    } catch (error) {
      console.error("Error reading uploads directory:", error);
      res.status(500).json({ error: "Failed to fetch the latest image" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
