import React from 'react';
import { Link } from 'react-router-dom';
import animals from "../assets/imagenes/aipg.webp";
import raqui from '../assets/imagenes/raqui.jpg';
import raflex from '../assets/imagenes/raflex.jpg';
import felix from '../assets/imagenes/felix.jpg';
import bella from '../assets/imagenes/bella.jpg';
import '../assets/styles/pages/_landingpage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/how-to-adopt">¿Cómo Adoptar?</Link></li>
            <li><a href="#dogs">Perros</a></li>
            <li><a href="#cats">Gatos</a></li>
          </ul>
        </nav>
      </header>
      <section className="full-width-featured">
        <img src={animals} alt="principal" className="full-width-featured img" />
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
