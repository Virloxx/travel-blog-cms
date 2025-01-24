'use client';

import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import styles from '../../app/ui/editor.module.css';
import { useState, useEffect } from 'react';

const Tiptap = ({ postId }) => {
  const [title, setTitle] = useState('Enter title here...');
  const [desc, setDesc] = useState('Enter description here...');
  const [content, setContent] = useState('Start typing here...');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch post data if postId is not "new"
  useEffect(() => {
    const fetchPost = async () => {
      if (postId === 'new') {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(`/api/posts_api/${postId}`);
        if (!response.ok) throw new Error('Failed to fetch post');
        const data = await response.json();
        setTitle(data.title || '');
        setDesc(data.short_description || '');
        setContent(data.content || '');
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
    ],
    content: content,
  });

  // Save content as HTML
  const savePostAsHTML = async () => {
    if (!editor) return;

    const contentHTML = editor.getHTML();
    console.log(contentHTML);
    const isUpdating = postId !== 'new';

    const save_url = `/api/posts_api/${postId}`
    const save_method = isUpdating ? 'PUT' : 'POST'

    try {
      
      const response = await fetch(save_url, 
      {
        method: save_method, // Correctly format method
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: title,
          thumbnail_img: 'https://plus.unsplash.com/premium_photo-1680284197408-0f83f185818b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          short_description: desc,
          content: contentHTML,
        })
      });

      const data = await response.json();
      if (response.ok) {
        alert(isUpdating ? 'Post updated successfully!' : 'Post saved successfully!');
        console.log(isUpdating ? 'Post updated:' : 'Post created:', data.post);
      } else {
        console.error('Error saving/updating post:', data.error);
        alert('Failed to save or update the post!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while saving/updating the post.');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {editor && (
        <>
          <h2>
            Post title
            <textarea
              style={{ resize: 'none' }}
              name="title"
              id="post_title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </h2>

          <h2>
            Short description
            <textarea
              style={{ resize: 'none' }}
              name="desc"
              id="post_desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </h2>

          <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
            <div className={styles.bubblemenu}>
              <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? styles.isactive : ''}
              >
                B
              </button>
              <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? styles.isactive : ''}
              >
                I
              </button>
              <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={editor.isActive('strike') ? styles.isactive : ''}
              >
                -s-
              </button>
              <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor.isActive('blockquote') ? styles.isactive : ''}
              >
                " "
              </button>
            </div>
          </BubbleMenu>
        </>
      )}
      <EditorContent editor={editor} />
      <button onClick={savePostAsHTML} className={styles.saveButton}>
        {postId === 'new' ? 'Create Post' : 'Update Post'}
      </button>
    </>
  );
};

export default Tiptap;
