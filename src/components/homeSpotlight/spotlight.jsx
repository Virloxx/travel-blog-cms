"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function Spotlight({ index, isAlt = false, title, content, img_url, alte }) {
  const router = useRouter()

  let normalClasses = `wrapper spotlight style${alte+1}`;
  if (isAlt) {
    normalClasses = `wrapper spotlight style${alte+1} alt`;
  }

  const handleRouter = () => {
    router.push(`/posts/${index}`)
  };

  return (
    <section id={index} className={normalClasses}>
      <div className="inner">
        <a onClick={() => handleRouter()} className="image"><img src={img_url} alt={title} /></a>
        <div className="content">
          <h2 className="major">{title}</h2>
          <p>{content}</p>
          <a onClick={() => handleRouter()} className="special">Learn more</a>
        </div>
      </div>
    </section>
  );
}

export const SpotlightParent = () => {
  const [spotlight, setSpotlights] = useState([]);

  useEffect(() => {
    async function fetchSpotlights() {
      const response = await fetch('/api/post_spot_get');
      const data = await response.json();
      setSpotlights(data);
    }

    fetchSpotlights();
  }, []);

  return (
    <>
      {spotlight.map((post,iter) => (
        <Spotlight
          key={post.id}
          index={post.postId}
          isAlt={iter % 2 == 0}
          title={post.post.title}
          content={post.post.short_description}
          img_url={post.post.thumbnail_img}
          alte={iter}
        />
      ))}
    </>
  );
};

export default SpotlightParent;