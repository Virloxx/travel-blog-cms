'use client';

import { useState, useEffect } from 'react';

const CommentSection = ({postId, user}) => {
  const [comment, setComment] = useState('Type here...');
  const [comments, setComments] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
      const fetchComments = async () => {
      const response = await fetch(`/api/posts_api/post_comm/${postId}`);
      
      if (!response.ok) throw new Error('Failed to fetch comment');
      
      const data = await response.json();

      const filteredComments = data
          .map((comm) => ({ 
            id: comm.id, 
            content: comm.content, 
            user: comm.user.userInfo.name, 
            createdAt: comm.createdAt.substring(0, 10) 
          }));

      setComments(filteredComments || '');
      console.log(comments);
    };
    fetchComments();
    setRefresh(false);
  }, [postId, refresh]);

  const saveComment = async () => {

    const saveUrl = '/api/posts_api/post_comm/comment_post';
    const saveMethod = 'POST';


    const toSend = {
        userId: user.id,
        postId: parseInt(postId),
        content: comment
    }
    
    try {
      const response = await fetch(saveUrl, {
        method: saveMethod,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(toSend),
      });

      const data = await response.json();
      if (response.ok) {
        // alert('Comment saved successfully!');
        console.log('Comment created:', data.content);
      } else {
        console.error('Error saving comment:');
        alert('Failed to save the comment!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while saving the comment.');
    }
    setRefresh(true);
  };

  return (
    <section id="footer">
      <div className="inner">
        <h2>
          {user ? "POST YOUR COMMENT" : "READ COMMENTS"}
          {user ? <textarea
              style={{ resize: 'none' }}
              name="title"
              id="post_title"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
          /> : ""}
        </h2>
        {user ? (<button className="button primary fit" onClick={() => saveComment()}>
          POST COMMENT
        </button>) : ""}
        <section className="all-comments">
          <ul className="alt">
            {
              comments.map((comm, index) => (
                <li key={index}>
                  <h4>{comm.user}<span>{comm.createdAt}</span></h4>
                  {comm.content}
                </li>
              ))
            }
          </ul>
        </section>
      </div>
    </section>
  );
};

export default CommentSection;
