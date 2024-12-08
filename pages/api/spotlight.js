import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  try {
    const posts = await prisma.spotlight.findMany();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
}
