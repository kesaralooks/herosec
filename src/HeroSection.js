import React from "react";
import "./HeroSection.css"; // Stylesheet for the hero section

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="background-image"></div>
      <h1 className="headline">Welcome to My React Website</h1>
      <div className="text-animations">
      <p className="subtitle">Explore the wonders of our platform</p>
      </div>
      <button>Hire me</button>
    </div>
    
  );
};

export default HeroSection;
