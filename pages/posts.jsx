// pages/posts.js
import { useEffect, useState } from 'react';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('/api/posts');
      const data = await response.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            {post.img_url && <img src={post.img_url} alt={post.title} />}
          </li>
        ))}
      </ul>
    </div>
  );
}
