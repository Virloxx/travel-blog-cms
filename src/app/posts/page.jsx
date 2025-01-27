"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function Post({ index, title, content, img_url, img_alt }) {
  const router = useRouter();

  const handleRouter = () => {
    router.push(`/posts/${index+1}`)
  };

  return (
    <article id={title+"-id"}>
        <a onClick={() => handleRouter()} className="image"><img src={img_url} alt={img_alt} /></a>
        <h3 className="major">{title}</h3>
        <p>{content}</p>
        <a onClick={() => handleRouter()} className="special">Learn more</a>
    </article>
  );
}

export const PostParent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('/api/post_get');
      const data = await response.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
  <section id="page-wrapper">
    <div className="edit-page">
      <section className="features">
        {posts.map((post, index) => (
          <Post
            key={post.id}
            index={post.id}
            title={post.title}
            content={post.short_description}
            img_url={post.thumbnail_img}
          />        
        ))}
      </section>
    </div>
  </section>
  );
};

export default PostParent;