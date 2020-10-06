import React from 'react';
import { MasoryPost } from './';

export default function PostMasonry({ posts, columns, tagsOnTop }) {
  return (
    <section
      className='masonry'
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(275px,1fr))` }}
    >
      {posts.map((post, index) => (
        <MasoryPost {...{ post, index, tagsOnTop, key: index }} />
      ))}
    </section>
  );
}
