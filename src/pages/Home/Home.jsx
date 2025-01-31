import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import Showcase from "../../components/Showcase/Showcase";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <Projects />
    </>
  );
};

export default Home;
