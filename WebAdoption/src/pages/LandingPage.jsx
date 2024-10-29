import React from 'react';
import raqui from '../assets/images/raqui.jpg';
import raflex from '../assets/images/raflex.jpg';
import felix from '../assets/images/felix.jpg';
import bella from '../assets/images/bella.jpg';
import banner from '../assets/images/banner.png';
import '../assets/styles/pages/_landingpage.css';
import '../assets/styles/components/navBar.css';
import '../assets/styles/components/howToAdopt.css';
import '../assets/styles/components/stepCard.css';
import NavBar from '../components/landingPage/navBar/navBar';
import HowToAdopt from "./howToAdopt.jsx";
import Banner from '../components/landingPage/banner/banner.jsx';

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="landing__navbar">
        <NavBar />
      </div>
      <div className="landing__banner">
        <Banner 
          imageUrl={banner}
        />
      </div>
      <div className="landing__content">
        <HowToAdopt />
      </div>
    </div>
  );
};

export default LandingPage;
