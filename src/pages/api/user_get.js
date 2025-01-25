// pages/api/users.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const users = await prisma.userInfo.findMany({
        select: {
          id: true,
          name: true,
          createdAt: true,
          editedAt: true,
          isAdmin: true,
          profilePicUrl: true,
          user: {
            select: {
              login: true,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      });
      res.status(200).json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
