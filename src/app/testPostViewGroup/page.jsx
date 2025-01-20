'use client';

import { useState, useEffect } from 'react';

export default function EditorPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/post_get');
        if (!response.ok) throw new Error('Failed to fetch posts');
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  
  return (
    <section className="wrapper">
      <header>
        <div className="inner">
          <h2>Blog Posts</h2>
          <p>Browse the latest posts from our collection.</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          {posts.length > 0 ? (
            posts.map((post) => (
              <article key={post.id}>
                <h3>{post.title}</h3>
                <img src={post.thumbnail_img} alt={post.title} />
                <p>{post.short_description}</p>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                <p><em>Created at: {new Date(post.created_at).toLocaleDateString()}</em></p>
              </article>
            ))
          ) : (
            <p>No posts available.</p>
          )}
        </div>
      </div>
    </section>
  );
}