import React from "react";
import { PostMasonry } from ".../component/commom";
import trending from "../assets/mocks/trending";
// import { Container } from './styles';

function Home() {
  return (
    <section className="container home">
      <div className="row">
        <h2>Trending Posts</h2>
        <PostMasonry posts={trending} columns={3} />
      </div>
    </section>
  );
}

export default Home;
