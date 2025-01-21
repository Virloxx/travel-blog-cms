// pages/api/posts/[id].js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const post = await prisma.post.findUnique({
        where: { id: parseInt(id, 10) }, // Ensure the ID is an integer
      });

      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }

      res.status(200).json(post);
    } catch (error) {
      console.error('Error fetching post:', error);
      res.status(500).json({ error: 'Failed to fetch the post' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
