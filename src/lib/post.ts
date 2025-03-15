import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//Simplest - get single post with certain ID
export async function getPost(id: number, includeComments: boolean = false) {
    try {
        const post = await prisma.post.findUnique({
            where:
                {
                    id: id
                },
            include: 
                {
                    comments: includeComments
                }
        });

        return post;
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

//Fetch all information of posts (from skip+1 to skip+1+number)
export async function getManyPosts(skip: number, take: number, includeComments: boolean = false,
                                                               includeFeatures: boolean = false,
                                                               includeSpotlights: boolean = false, ) {
    try {
        const post = await prisma.post.findMany({
            skip: skip,
            take: take,
            include: 
                {
                    comments: includeComments,
                    Features: includeFeatures,
                    Spotlight: includeSpotlights
                }
        });

        return post;
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}