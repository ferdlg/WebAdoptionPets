import React from 'react';
import '../../assets/styles/pages/_landingpage.css';
import '../../assets/styles/components/navBar.css';
import '../../assets/styles/components/howToAdopt.css';
import '../../assets/styles/components/stepCard.css';
import HowToAdopt from "../howToAdopt/howToAdopt.jsx";

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="landing__content--howtoadopt">
        <HowToAdopt />
      </div>
    </div>
  );
};

export default LandingPage;
