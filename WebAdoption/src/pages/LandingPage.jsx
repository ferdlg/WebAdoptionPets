import React from 'react';
import raqui from '../assets/images/raqui.jpg';
import raflex from '../assets/images/raflex.jpg';
import felix from '../assets/images/felix.jpg';
import bella from '../assets/images/bella.jpg';
import '../assets/styles/pages/_landingpage.css';
const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>No compres, adopta.</h1>
      </header>



      <section className="adoptable-animals">
        <div className="animal-card">
          <img src={raqui} alt="Raqui" className="animal-img" />
          <p>Mi nombre es Raqui</p>
        </div>
        <div className="animal-card">
          <img src={raflex} alt="Raflex" className="animal-img" />
          <p>Mi nombre es Raflex</p>
        </div>
        <div className="animal-card">
          <img src={felix} alt="Felix" className="animal-img" />
          <p>Mi nombre es Felix</p>
        </div>
        <div className="animal-card">
          <img src={bella} alt="Bella" className="animal-img" />
          <p>Mi nombre es Bella</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
