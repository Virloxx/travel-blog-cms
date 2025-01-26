import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const { id, postId } = req.body;

    if (!id || !postId) {
      return res.status(400).json({ error: "Both 'id' and 'postId' are required" });
    }

    if (id > 4 || id < 1) {
        return res.status(400).json({ error: "Spotlight ID is bigger than 4 or smaller than 1" });
    }  

    try {
      const postExists = await prisma.post.findUnique({
        where: { id: postId },
      });

      if (!postExists) {
        return res.status(404).json({ error: "Post not found" });
      }

      const updatedSpotlight = await prisma.spotlight.update({
        where: { id: parseInt(id, 10) },
        data: { postId },
      });

      return res.status(200).json({ message: "Spotlight updated successfully", updatedSpotlight });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        error: "An error occurred while updating the Spotlight",
        details: error.message,
      });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
