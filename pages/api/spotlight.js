import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  try {
    const spotlightPosts = await prisma.spotlight.findMany({
      include: {
        post: {
          select: {
            title: true,
            thumbnail_img: true,
            short_description: true,
            created_at: true,
          },
        },
      },
    });
    res.status(200).json(spotlightPosts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch spotlight posts' });
  }
}
