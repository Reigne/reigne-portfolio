import React from "react";
import NotFoundMessage from "../../components/NotFoundMessage/NotFoundMessage";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <NotFoundMessage />
      <Footer />
    </>
  );
};

export default NotFound;
