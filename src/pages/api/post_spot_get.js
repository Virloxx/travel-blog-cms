import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
if (req.method === 'GET') {
    try {
        // const spotlightPosts = await prisma.post.findMany({
        //     where: {
        //         Spotlight: {
        //             some: {}
        //         }
        //     },
        //     include: {
        //         Spotlight: {
        //             select: {
        //                 id: true
        //             }
        //         }
        //     }
        // });
        const spotlights = await prisma.spotlight.findMany({
            include: {
                post: {
                    select: {
                        thumbnail_img: true, 
                        short_description: true, 
                        title: true,
                    }
                }},
                orderBy: {
                    id: 'asc' // Change 'asc' to 'desc' for descending order
                }
            
        });
    
        // const postsWithSpotlightId = spotlightPosts.map(post => ({
        //     ...post,
        //     spotlightId: post.Spotlight.map(spotlight => spotlight.id)
        // }));
    
        res.status(200).json(spotlights);
    } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
    }
} else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}
}