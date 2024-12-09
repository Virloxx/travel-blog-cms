"use client"
import React, { useEffect, useState } from 'react';

export function Feature({ index, title, content, img_url, img_alt, redirect_to }) {
  return (
    <article>
        <a href={redirect_to} class="image"><img src={img_url} alt={img_alt} /></a>
        <h3 class="major">{title}</h3>
        <p>{content}</p>
        <a href="{redirect_to}" class="special">Learn more</a>
    </article>
  );
}

export const FeatureParent = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    async function fetchFeatures() {
      const response = await fetch('/api/feature');
      const data = await response.json();
      setFeatures(data);
    }

    fetchFeatures();
  }, []);

  return (
    <>
      {features.map((post, index) => (
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


<section id="four" class="wrapper alt style1">
    <div class="inner">
        <h2 class="major">Vitae phasellus</h2>
        <p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
        <section class="features">
            {/* insert here */}
        </section>
        <ul class="actions">
            <li><a href="#" class="button">Browse All</a></li>
        </ul>
    </div>
</section>