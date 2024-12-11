"use client"
import React, { useEffect, useState } from 'react';

export function Feature({ index, title, content, img_url, img_alt, redirect_to }) {
  return (
    <article id={title+"-id"}>
        <a href={redirect_to} className="image"><img src={img_url} alt={img_alt} /></a>
        <h3 className="major">{title}</h3>
        <p>{content}</p>
        <a href="{redirect_to}" className="special">Learn more</a>
    </article>
  );
}

export const FeatureParent = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    async function fetchFeatures() {
      const response = await fetch('/api/post');
      const data = await response.json();
      setFeatures(data);
    }

    fetchFeatures();
  }, []);

  return (
  <section id="four" className="wrapper alt style1">
    <div className="inner">
      <h2 className="major">Vitae phasellus</h2>
      <p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
      <section className="features">
        {features.map((post, index) => (
          <Feature
            key={post.id}
            index={index}
            title={post.post.title}
            content={post.post.short_description}
            img_url={post.post.thumbnail_img}
          />        
        ))}
      </section>
      <ul className="actions">
            <li><a href="#" className="button">Browse All</a></li>
      </ul>
    </div>
  </section>
  );
};

export default FeatureParent;