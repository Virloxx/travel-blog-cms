import React, { useState, useEffect } from 'react'

function manageSpotlights() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function getPosts() {
            const response = await fetch('/api/post_get')
            const json = await response.json()
            console.log(json)
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
                    <th># of Spotlight</th>
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
                            <select name="demo-category" id="demo-category">
                              <option selected="selected" value="">-</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </select>
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

export default manageSpotlights