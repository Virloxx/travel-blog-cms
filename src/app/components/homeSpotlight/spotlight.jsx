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
  const [spotlight, setSpotlights] = useState([]);

  useEffect(() => {
    async function fetchSpotlights() {
      const response = await fetch('/api/spotlight');
      const data = await response.json();
      setSpotlights(data);
    }

    fetchSpotlights();
  }, []);

  return (
    <>
      {spotlight.map((post, index) => (
        <Spotlight
          key={post.id}
          index={index}
          isAlt={index % 2 !== 0}
          title={post.post.title}
          content={post.post.short_description}
          img_url={post.post.thumbnail_img}
        />
      ))}
    </>
  );
};

export default SpotlightParent;