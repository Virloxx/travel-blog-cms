'use client';

import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import styles from '../../app/ui/editor.module.css';
import { useState, useEffect } from 'react';


const Tiptap = ({postId}) => {
  const [title, setTitle] = useState('Enter title here...');
  const [desc, setDesc] = useState('Enter description here...');
  const [content, setContent] = useState('Start typing here...');

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
      if (postId !== 'new') return;
  
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

    const contentHTML = editor.getHTML(); // Get the editor's content as HTML
    console.log('Saving the following HTML:', contentHTML);

    // Make an API call to save the HTML content
    try {
      const response = await fetch('/api/post_create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'My Post Title', // Replace with dynamic input if needed
          thumbnail_img: 'https://plus.unsplash.com/premium_photo-1680284197408-0f83f185818b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with dynamic URL if needed
          short_description: 'Short description here', // Replace with dynamic input if needed
          content: contentHTML, // Save the content as HTML
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Post saved successfully!');
        console.log('Post created:', data.post);
      } else {
        console.error('Error saving post:', data.error);
        alert('Failed to save the post!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while saving the post.');
    }
  };

  return (
    <>
      {editor && (
        <>
            <h2>Post title<textarea  style={{resize: "none"}} name="title" id="post_title">{title}</textarea></h2>
        
            <h2>Short description<textarea  style={{resize: "none"}} name="title" id="post_desc">{desc}</textarea></h2>
        
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
        Save Post
      </button>
    </>
  );
};

export default Tiptap;
