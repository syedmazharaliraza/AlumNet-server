import React from "react";
import "./LandingPage.css";
import HomeSection from "../components/landingPage/HomeSection";
import AboutSection from "../components/landingPage/AboutSection";

const LandingPage = () => {
  return (
    <main>
      <HomeSection />
      <AboutSection />
    </main>
  );
};

export default LandingPage;
