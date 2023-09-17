import React from "react";
import Contact from "../Contact/Contact";
import Footer from "../../Shared/Footer/Footer";
import Header from "../Header/Header";
import Project from "../Project/Project";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import LatestNews from "../LatestNews/LatestNews";

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <Project />
      <Testimonials />
      <LatestNews />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
