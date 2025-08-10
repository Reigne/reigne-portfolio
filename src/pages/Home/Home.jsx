import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import Showcase from "../../components/Showcase/Showcase";
import Services from "../../components/Services/Services";
import Footer from "../../components/Footer/Footer";
import AboutMe from "../../components/AboutMe/AboutMe";
import Metadata from "../../components/Layout/Metadata";
import ClickSpark from "../../components/Animations/ClickSpark";

const Home = () => {
  return (
    <>
      <Metadata title="Home" />
      <Navbar />
      <ClickSpark
        sparkColor="#84cc16"
        sparkSize={12}
        sparkRadius={20}
        sparkCount={10}
        duration={500}
      >
        <Hero />
        <Showcase />
        <AboutMe />
        <Services />
        <Projects />
        <Footer />
      </ClickSpark>
    </>
  );
};

export default Home;
