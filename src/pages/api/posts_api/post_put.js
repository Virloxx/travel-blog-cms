// pages/api/posts/[id].js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    // Update post by ID
    try {
      const { id, title, thumbnail_img, short_description, content } = req.body;
      
      // Validate the request body
      if (!title || !short_description || !content || !id) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
      //thumbnail_img = thumbnail_img ? thumbnail_img : "";  
      
      const updatedPost = await prisma.post.update({
        where: { id: id }, // Ensure `id` is valid and exists in the database
        data: {
          title, // Mandatory
          thumbnail_img, // Mandatory
          short_description, // Mandatory
          content, // Mandatory
          edited_at: new Date(), // Update the `edited_at` field
        },
      });
      
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
