import React from 'react';
import '../assets/styles/pages/_landingpage.css';
import '../assets/styles/components/navBar.css';
import '../assets/styles/components/howToAdopt.css';
import '../assets/styles/components/stepCard.css';
import NavBar from '../components/landingPage/navBar/navBar';
import HowToAdopt from "./howToAdopt.jsx";

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="landing__navbar">
        <NavBar />
      </div>
      <div className="landing__content">
        <HowToAdopt />
      </div>
    </div>
  );
};

export default LandingPage;
