import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  try {
    const featuresPosts = await prisma.features.findMany({
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
    res.status(200).json(featuresPosts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch spotlight posts' });
  }
}
