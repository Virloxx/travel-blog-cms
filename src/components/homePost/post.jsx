"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function Post({ index, title, content, img_url, img_alt }) {
  const router = useRouter();

  const handleRouter = () => {
    router.push(`/posts/${index}`)
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
  const router = useRouter();

  const handleRouter = () => {
    router.push(`/posts`)
  };

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('/api/get_features');
      const data = await response.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
  <section id="four" className="wrapper alt style1">
    <div className="inner">
      <section className="features">
        {posts.map((post) => (
          <Post
            key={post.id}
            index={post.postId}
            title={post.post.title}
            content={post.post.short_description}
            img_url={post.post.thumbnail_img}
          />        
        ))}
      </section>
      <ul className="actions">
            <li><a onClick={() => handleRouter()} className="button">Browse All</a></li>
      </ul>
    </div>
  </section>
  );
};

export default PostParent;