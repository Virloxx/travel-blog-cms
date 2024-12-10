import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';

const Editor = () => {
  const editorRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (!editorRef.current) {
      editorRef.current = new EditorJS({
        holder: 'editorjs',
        tools: {
          
        },
      });
    }

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  return <div id="editorjs"></div>;
};

export default Editor;
