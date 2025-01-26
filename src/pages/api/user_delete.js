import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    try {
      const user = await prisma.userInfo.findUnique({
        where: { id: parseInt(id, 10) },
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      await prisma.user.delete({
        where: { id: parseInt(id, 10) },
        include: {
            userInfo: true
        }
      });

      return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting user:', error);
      return res.status(500).json({ error: 'Failed to delete user' });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
