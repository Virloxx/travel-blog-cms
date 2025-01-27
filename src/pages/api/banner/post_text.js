// pages/api/posts/[id].js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    // Update post by ID
    try {

      const { title, thumbnail_img, short_description } = req.body;
      
      // Validate the request body
      if (!title || !short_description || !thumbnail_img) {
        return res.status(400).json({ error: 'Missing required fields' });
      } 

      const data = {};
        if (title) data.title = title;
        if (thumbnail_img) data.thumbnail_img = thumbnail_img;
        if (short_description) data.short_description = short_description;
        if (content) data.content = content;
      
        for (const key in data) {
            const updated = await prisma.misc_Info.update({
              where: { key: id }, // Ensure `id` is valid and exists in the database
              data: {
                title, // Mandatory
                thumbnail_img, // Mandatory
                short_description, // Mandatory
                content, // Mandatory
                edited_at: new Date(), // Update the `edited_at` field
              },
            });
        }

      
      res.status(200).json(updatedPost);
    } catch (error) {
      console.error('Error updating post:', error);

      // Handle not found errors explicitly
      if (error.code === 'P2025') {
        return res.status(404).json({ error: 'Post not found' });
      }

      res.status(500).json({ error: 'Failed to update the post' });
    }
  } else {
    // Handle unsupported methods
    res.setHeader('Allow', ['GET', 'PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
