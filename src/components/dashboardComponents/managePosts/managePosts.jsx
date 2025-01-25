import React, { useState, useEffect } from 'react'

function managePosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function getPosts() {
            const response = await fetch('/api/post_get')
            const json = await response.json()
            setPosts(json)
        }
        getPosts()
    }, [])
    
    return (
        <div className="dashboard-container">
            <main className="dashboard-content">
            <div className="table-container">
                <table className="posts-table">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Thumbnail</th>
                    <th>Short Description</th>
                    <th>Created At</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>
                            <img
                                src={post.thumbnail_img}
                                alt="Thumbnail"
                                className="thumbnail"
                            />
                        </td>
                        <td>{post.short_description}</td>
                        <td>{new Date(post.created_at).toLocaleDateString()}</td>
                        <td>
                            <a href={`/posts/${post.id}/edit`}><button className="button primary fit">Edit</button></a>
                            <button className="button fit delete-button">Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </main>
        </div>
    )
}

export default managePosts