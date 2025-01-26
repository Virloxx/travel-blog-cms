import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === 'GET') {
    try {
      const comment = await prisma.comment.findMany({
        where: {
            postId: parseInt(id)
        },
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          user:{
            select:{
              userInfo: {
                select: {
                  name: true
                }
              }
            }
          }
        }
      });
      res.status(200).json(comment);
    } catch (error) {
      console.error('Error fetching comments:', error);
      res.status(500).json({ error: 'Failed to fetch comments' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
