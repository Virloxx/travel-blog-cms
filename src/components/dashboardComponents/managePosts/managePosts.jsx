import React, { useState, useEffect } from 'react';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function ManagePosts() {
    const [posts, setPosts] = useState([]);
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [selectedPostId, setSelectedPostId] = useState(null);

    useEffect(() => {
        async function getPosts() {
            const response = await fetch('/api/post_get');
            const json = await response.json();
            setPosts(json);
        }
        getPosts();
    }, []);

    const openPopUp = (id) => {
        setSelectedPostId(id);
        setIsPopUpOpen(true);
    };

    const closePopUp = () => {
        setSelectedPostId(null);
        setIsPopUpOpen(false);
    };

    const deletePost = async () => {
        try {
            const response = await fetch('/api/posts_api/post_delete', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: selectedPostId }),
            });

            if (response.ok) {
                setPosts((prevPosts) => prevPosts.filter((post) => post.id !== selectedPostId));
            } else {
                const errorData = await response.json();
                alert(`Failed to delete post: ${errorData.error}`);
            }
        } catch (error) {
            console.error('Error deleting post:', error);
            alert('An error occurred while deleting the post');
        } finally {
            closePopUp();
        }
    };

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
                                <th className="th-actions">Actions</th>
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
                                        <a href={`/posts/${post.id}/edit`}>
                                            <button className="button primary fit edit-button">
                                                <MdEdit />
                                            </button>
                                        </a>
                                        <button
                                            className="button fit delete-button"
                                            onClick={() => openPopUp(post.id)}
                                        >
                                            <MdDelete />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>

            {isPopUpOpen && (
                <div id="popup-overlay">
                    <div className="popup">
                        <p>Are you sure you want to delete this post?</p>
                        <div className="popup-actions">
                            <button className="button fit delete-button" onClick={deletePost}>
                                Yes, Delete
                            </button>
                            <button className="button primary fit" onClick={closePopUp}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ManagePosts;
