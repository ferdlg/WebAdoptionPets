import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/styles/components/navBar.css';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar__list">
        <li className="nav-bar__item"><Link to="/" className="nav-bar__link">Home</Link></li>
        <li className="nav-bar__item"><Link to="/how-to-adopt" className="nav-bar__link">¿Cómo Adoptar?</Link></li>
        <li className="nav-bar__item"><Link to="/dogs" className="nav-bar__link">Perros</Link></li>
        <li className="nav-bar__item"><Link to="/cats" className="nav-bar__link">Gatos</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
