import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import Showcase from "../../components/Showcase/Showcase";
import Services from "../../components/Services/Services";
import Footer from "../../components/Footer/Footer";
import AboutMe from "../../components/AboutMe/AboutMe";
import Metadata from "../../components/Layout/Metadata";

const Home = () => {
  return (
    <>
      <Metadata title="Home" />
      <Navbar />
      <Hero />
      <Showcase />
      <AboutMe />
      <Services />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
