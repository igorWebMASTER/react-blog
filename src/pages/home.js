import React from 'react';
import { PostMasonry } from '../components/common';
import trending from '../assets/mocks/trending';
import featured from '../assets/mocks/featured';

const trendingConfig = {
  1: {
    gridArea: '1 / 2 / 3 / 3',
  },
};

const featuredConfig = {};

const mergeStyles = function (posts, config) {
  posts.forEach((post, index) => {
    post.style = config[index];
  });
};

mergeStyles(trending, trendingConfig);
mergeStyles(featured, featuredConfig);

export default function Home() {
  return (
    <section className='container home'>
      <div className='row'>
        <h1>Featured Posts</h1>
        <section className='featured-posts-container'>
          <PostMasonry posts={featured} columns={2} tagsOnTop={true} />
        </section>
        <h1>Posts mais populares</h1>
        <PostMasonry posts={trending} columns={3} />
      </div>
    </section>
  );
}
