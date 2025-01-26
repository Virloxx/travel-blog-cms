'use client';

import { useState, useEffect } from 'react';

const CommentSection = ({postId}) => {
  const [comment, setComment] = useState('Start typing comment...');
  const [comments, setComments] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);

        const response = await fetch(`/api/posts_api/post_comm/${postId}`);
        
        if (!response.ok) throw new Error('Failed to fetch comment');
        
        const data = await response.json();

        const filteredComments = data
            .map((comm) => ({ id: comm.id, content: comm.content, user: comm.user.userInfo.name }));

        setComments(filteredComments || '');
        console.log(comments);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [postId]);

  // Save content as HTML
  const saveComment = async () => {

    const isUpdating = postId !== 'new';

    const saveUrl = '/api/posts_api/post_comm/comment_post';
    const saveMethod = 'POST';


    const toSend = {
        userId: 2,
        postId: 4,
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
        alert('Comment saved successfully!');
        console.log('Comment created:', data.content);
      } else {
        console.error('Error saving comment:');
        alert('Failed to save the comment!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while saving the comment.');
    }
  };

  return (
    <>
        <h2>
        Post comment
        <textarea
            style={{ resize: 'none' }}
            name="title"
            id="post_title"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            />
        </h2>
    <button onClick={() => saveComment()}>
        POST COMMENT
    </button>
    {
        comments.map((comm, index) => (
            
            <p key={index}>{comm.content + " " + comm.user}</p>))
        }
    </>
  );
};

export default CommentSection;
