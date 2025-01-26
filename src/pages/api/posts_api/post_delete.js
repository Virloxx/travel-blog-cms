import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'Missing required field: id' });
    }

    try {
      // Check if the post exists
      const existingPost = await prisma.post.findUnique({
        where: { id },
      });

      if (!existingPost) {
        return res.status(404).json({ error: 'Post not found' });
      }

      // Delete the post
      await prisma.post.delete({
        where: { id },
      });

      return res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
      console.error('Error deleting post:', error);
      return res.status(500).json({ error: 'Failed to delete post' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
