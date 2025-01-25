import React, { useState, useEffect } from 'react'

function manageSpotlights() {
    const [posts, setPosts] = useState([])

    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event, postId) => {
        const post_id = postId;
        const spotlight_id = event.target.value;
    };

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
                            <select onChange={(event) => handleChange(event, post.id)} name="demo-category" id="demo-category">
                              <option defaultValue="selected" value="">-</option>
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