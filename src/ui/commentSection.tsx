import React, { PropsWithChildren } from 'react';
import { type Comment } from '@prisma/client';

export default async function CommentSection({comments}: {comments: Array<Comment>}) {
  return (
    <section id="footer">
      {/* <UserComment><UserComment/> */}
      <div className="inner">
        <h2>
          Comments
        </h2>
        <section className="all-comments">
          <ul className="alt">
            {
              comments?.map((comm, index) => (
                <li key={index}>
                  <h4>{comm.userId}<span>{comm.createdAt.getDate() + "." + comm.createdAt.getMonth()+1 + "." + comm.createdAt.getFullYear()}</span></h4>
                  {comm.content}
                </li>
              ))
            }
          </ul>
        </section>
      </div>
    </section>
  )
}

