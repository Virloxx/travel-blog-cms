import React, { useState, useEffect } from 'react';

function ManageSpotlights() {
  const [posts, setPosts] = useState([]);
  const [selectedValues, setSelectedValues] = useState({});

  const handleChange = (event, postId) => {
    const spotlight_id = event.target.value;

    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      [postId]: spotlight_id,
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

export default ManageSpotlights;
