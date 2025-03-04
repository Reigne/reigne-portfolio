import React from "react";
import NotFoundMessage from "../../components/NotFoundMessage/NotFoundMessage";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Metadata from "../../components/Layout/Metadata";

const NotFound = () => {
  return (
    <>
      <Metadata title="Page Not Found" />
      <Navbar />
      <NotFoundMessage />
      <Footer />
    </>
  );
};

export default NotFound;
