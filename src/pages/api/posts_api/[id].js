// pages/api/posts/[id].js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    // Fetch post by ID
    try {
      const post = await prisma.post.findUnique({
        where: { id: parseInt(id, 10) },
        select: {
          title: true,
          short_description: true,
          content: true,
          thumbnail_img: true
        }
      });

      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }

      res.status(200).json(post);
    } catch (error) {
      console.error('Error fetching post:', error);
      res.status(500).json({ error: 'Failed to fetch the post' });
    }
  } 
  
  else if (req.method === 'PUT') {
    // Update post by ID
    try {
      const { title, thumbnail_img, short_description, content } = req.body;
      
      // Validate the request body
      if (!title || !short_description || !content) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const updatedPost = await prisma.post.update({
        where: { id: id },
        data: {
          title,
          thumbnail_img,
          short_description,
          content,
          updatedAt: new Date(), // Optionally update a timestamp field
        },
      });
      
      res.status(200).json({ post: updatedPost });
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
