'use client'
import Tiptap from '@/components/editor/tiptap';
import { useParams } from 'next/navigation';
import React, { useEffect, useRef } from 'react';

export default function EditorPage() {
  const { slug } = useParams();

  return (
    <section id="page-wrapper">
      <div className="edit-page">
        <div>
          <section>
            <h1>POST EDITOR</h1>
            <Tiptap className={"smellyhack"} postId={slug} />
          </section>
        </div>
      </div>
    </section>
  );
}