'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SinglePostPage() {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    async function fetchPost() {
      try {
        const response = await fetch(`/api/posts_api/${slug}`);
        if (!response.ok) throw new Error('Failed to fetch post');
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (loading) return <p>Loading post...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!post) return <p>No post found.</p>;

  return (
    <section className="wrapper">
      <header>
        <div className="inner">
          <h2>{post.title}</h2>
          <p>{post.short_description}</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <div className="box alt">
              <div className="row gtr-uniform">
                <div className="col-12"><span className="image fit"><img src={post.thumbnail_img} alt={post.title} /></span></div>
                <div className="col-6"><span className="image fit"><img src={post.thumbnail_img} alt={post.title} /></span></div>
                <div className="col-6"><span className="image fit"><img src={post.thumbnail_img} alt={post.title} /></span></div>
                {/* <div className="col-4"><span className="image fit"><img src={post.thumbnail_img} alt={post.title} /></span></div> */}
                <div className="col-4"><span className="image fit"><img src="images/pic07.jpg" alt="" /></span></div>
                <div className="col-4"><span className="image fit"><img src="images/pic05.jpg" alt="" /></span></div>
                <div className="col-4"><span className="image fit"><img src="images/pic06.jpg" alt="" /></span></div>
                <div className="col-4"><span className="image fit"><img src="images/pic06.jpg" alt="" /></span></div>
                <div className="col-4"><span className="image fit"><img src="images/pic07.jpg" alt="" /></span></div>
                <div className="col-4"><span className="image fit"><img src="images/pic05.jpg" alt="" /></span></div>
              </div>
            </div>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <p><em>Created at: {new Date(post.created_at).toLocaleDateString()}</em></p>
        </div>
      </div>
    </section>
  );
}
