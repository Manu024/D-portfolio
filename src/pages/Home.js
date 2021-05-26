import React, { useState } from "react";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Sidebar from "../components/Sidebar";
import SkillsSection from "../components/SkillsSection";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar((prevState) => !prevState);
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <HeroSection />
      <AboutMe />
      <SkillsSection />
      <Projects />
      <Contact />
      <Footer/>
    </>
  );
};

export default Home;
