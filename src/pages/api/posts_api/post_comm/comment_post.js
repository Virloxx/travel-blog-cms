// pages/api/comments/index.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Add a new comment
    try {
      const { rootId, userId, postId, content } = req.body;

      // Validate the request body
      if (!userId || !postId || !content) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const newComment = await prisma.comment.create({
        data: {
          rootId: rootId || null, // Optional, defaults to null
          userId,
          postId,
          content,
          createdAt: new Date(),
        },
      });

      res.status(201).json(newComment);
    } catch (error) {
      console.error('Error creating comment:', error);
      res.status(500).json({ error: 'Failed to add the comment' });
    }
  } else {
    // Handle unsupported methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
