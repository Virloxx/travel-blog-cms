// app/editor/page.js
'use client'
import Tiptap from '@/components/editor/tiptap';

export default function EditorPage() {
  // const handleSave = async (content) => {
  //   console.log('Saving content:', content);

  //   // Example: Save to API or database
  //   const response = await fetch('/api/posts', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ content }),
  //   });

  //   if (response.ok) {
  //     alert('Post saved successfully!');
  //   } else {
  //     alert('Failed to save post');
  //   }
  // };

  return (
    <section className="wrapper">
      <header>
        <div className="inner">
          <h2>Title</h2>
          <p>Phasellus non pulvinar erat. Fusce tincidunt nisl eget ipsum.</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <section>
            <h1>Blog Post Editor</h1>
            {/* <Editor /> */}
            <Tiptap />
          </section>
        </div>
      </div>
    </section>
  );
}