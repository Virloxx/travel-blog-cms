"use client"
import React, { useEffect, useState } from 'react';

export function Spotlight({ index, isAlt = false, title, content, img_url }) {
  let normalClasses = "wrapper spotlight style1";

  if (isAlt) {
    normalClasses = "wrapper spotlight style1 alt";
  }

  return (
    <section id={index} className={normalClasses}>
      <div className="inner">
        <a href="#" className="image"><img src={img_url} alt={title} /></a>
        <div className="content">
          <h2 className="major">{title}</h2>
          <p>{content}</p>
          <a href="#" className="special">Learn more</a>
        </div>
      </div>
    </section>
  );
}

export const SpotlightParent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('/api/spotlight');
      const data = await response.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <>
      {posts.map((post, index) => (
        <Spotlight
          key={post.id}
          index={index}
          isAlt={index % 2 !== 0}
          title={post.title}
          content={post.content}
          img_url={post.img_url}
        />
      ))}
    </>
  );
};

export default SpotlightParent;