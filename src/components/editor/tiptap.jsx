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
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
            <div className={styles.bubblemenu}>
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                >
                    B
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    // className={editor.isActive('italic') ? 'is-active' : ''}
                >
                    I
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    // className={editor.isActive('strike') ? 'is-active' : ''}
                >
                    -s-
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    // className={editor.isActive('strike') ? 'is-active' : ''}
                >
                    -s-
                </button>
            </div>
        </BubbleMenu>
        <EditorContent editor={editor} />
  </>
  )
  
  
}

export default Tiptap