import React, { useState, useEffect } from 'react';

function ManageFeatures() {
  const [posts, setPosts] = useState([]);
  const [selectedValues, setSelectedValues] = useState({});

  const handleChange = async (event, postId) => {
    const feature_id = event.target.value;
    const post_id = postId;

    if (feature_id === "-") return;

    try {
        const response = await fetch("/api/edit_feature", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ "id": parseInt(feature_id), "postId": parseInt(post_id) }),
        });
    
        if (!response.ok) {
          const errorData = await response.json();
          console.error("Failed to update feature:", errorData);
          alert(`Error: ${errorData.error}`);
          return;
        }
    
        const data = await response.json();
        console.log("Feature updated successfully:", data);
        alert("Feature updated successfully!");
      } catch (error) {
        console.error("An error occurred while updating feature:", error);
        alert("An unexpected error occurred. Please try again.");
      }

    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      [postId]: feature_id,
    }));
  };

  useEffect(() => {
    async function getPosts() {
      const response = await fetch('/api/post_get');
      const json = await response.json();
      setPosts(json);
    }
    getPosts();
  }, []);

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
                <th># of Feature</th>
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
                    <select
                      value={selectedValues[post.id] || ''}
                      onChange={(event) => handleChange(event, post.id)}
                      name="demo-category"
                      id={`demo-category-${post.id}`}
                    >
                      <option value="">-</option>
                      {[1, 2, 3, 4].map((option) => (
                        <option
                          key={option}
                          value={option}
                          disabled={Object.values(selectedValues).includes(String(option)) && selectedValues[post.id] !== String(option)}
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default ManageFeatures;
