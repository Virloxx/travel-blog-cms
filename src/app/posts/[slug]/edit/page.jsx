'use client'
import Tiptap from '@/components/editor/tiptap';
import { useParams } from 'next/navigation';

export default function EditorPage() {
  const { slug } = useParams();


  return (
    <section className="wrapper">
      <div className="wrapper">
        <div className="inner">
          <section>
            <h1>POST EDITOR</h1>
            <Tiptap postId={slug} />
          </section>
        </div>
      </div>
    </section>
  );
}