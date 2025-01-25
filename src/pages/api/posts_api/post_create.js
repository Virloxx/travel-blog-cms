import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, thumbnail_img, short_description, content } = req.body;

    if (!title || !thumbnail_img || !short_description || !content) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const post = await prisma.post.create({
        data: {
          title,
          thumbnail_img,
          short_description,
          content,
          created_at: new Date(),
          edited_at: new Date(),
        },
      });

      return res.status(201).json({ message: 'Post created successfully', post });
    } catch (error) {
      console.error('Error creating post:', error);
      return res.status(500).json({ error: 'Failed to create post' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}