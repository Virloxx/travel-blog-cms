import React from 'react'
import { getManyPosts } from '@/lib/post'
import SelectColumn from './selectColumn';

export default async function PostList() {
    const posts = await getManyPosts(0, 5, true, true, true);
    
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
              {posts?.map((post) => (
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
                    <SelectColumn post={post}/>
                    {/* <select
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
                    </select> */}
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