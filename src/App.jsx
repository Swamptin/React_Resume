import React from "react";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import WorkExperience from "./components/workexperience/WorkExperience";
import DevRel from "./components/devrel/DevRel";
import Topbar from "./components/topbar/Topbar";

const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Experience />
      <WorkExperience />
      <Portfolio />
      <DevRel />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
