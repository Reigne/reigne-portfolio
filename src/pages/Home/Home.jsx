import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import Showcase from "../../components/Showcase/Showcase";
import Services from "../../components/Services/Services";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <Services />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
