import React from 'react';
import perro from '../assets/images/perro.webp';
import raqui from '../assets/images/raqui.jpg';
import raflex from '../assets/images/raflex.jpg';
import felix from '../assets/images/felix.jpg';
import bella from '../assets/images/bella.jpg';
import '../styles/landingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>No compres, adopta.</h1>
      </header>

      <section className="featured-animal">
        <img src={perro} alt="Perro principal" className="featured-img" />
        <h2>Adoptame</h2>
      </section>

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
