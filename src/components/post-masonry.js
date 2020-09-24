import React from "react";

export default function PostMansonry({ posts, columns, tagsOnTop }) {
  return (
    <section
      className="mansory"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(275px,1fr))` }}
    >
      {posts.map((post, index) => (
        <MasonryPost {...{ post, index, tagsOnTop, key: index }} />
      ))}
    </section>
  );
}
