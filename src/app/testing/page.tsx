import React from 'react'
import { getPost, getManyPosts } from '@/lib/post'
import CommentSection from '@/ui/commentSection'

export default async function Page() {
    const post = await getPost(16, true);
    const postsTwoAndThree = await getManyPosts(1, 2);

    return (
        <>
            <br />
            <br />
            <br />
            <div>Test fetchowania danych bez pośrednictwa API</div>
            <div>{post?.comments[0].content}</div>
            <br />
            
            {postsTwoAndThree?.map((post, index) => (
                <div key={index}>
                    <h1>{post.title}</h1>
                    <div>{post.content}</div>
                    <br></br>
                </div>
            ))}

            <br></br>
            <div>A tutaj już fetchowanie normalnie jebnięte przez API</div>
            <CommentSection user={0} postId={15}></CommentSection>
        </>
    )
}
