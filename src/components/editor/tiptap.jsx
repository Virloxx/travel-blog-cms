'use client'

import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import styles from '../../app/ui/editor.module.css'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
        StarterKit.configure({
            heading: {
                levels: [1, 2, 3]
            },
    })],
    content: '<p>Hello World! 🌎️</p>',
  })

  return (
    <>
        {editor && <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
            <div className={styles.bubblemenu}>
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? styles.isactive : ""}
                >
                    B
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? styles.isactive : ""}
                >
                    I
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={editor.isActive('strike') ? styles.isactive : ""}
                >
                    -s-
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={editor.isActive('blockquote') ? styles.isactive : ""}
                >
                    " "
                </button>
            </div>
        </BubbleMenu>
}
        <EditorContent editor={editor} />
        </>
  )
  
  
}

export default Tiptap