import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import Showcase from "../../components/Showcase/Showcase";
import Services from "../../components/Services/Services";
import Footer from "../../components/Footer/Footer";
import ContactMe from "../../components/ContactMe/ContactMe";
import Metadata from "../../components/Layout/Metadata";

const Contact = () => {
  return (
    <>
      <Metadata title="Contact Me" />
      <Navbar />
      <ContactMe />
      <Footer />
    </>
  );
};

export default Contact;
