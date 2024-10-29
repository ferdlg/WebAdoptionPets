import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/styles/components/navBar.css';
import { SiDatadog } from "react-icons/si";


const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar__list">
        <li className="nav-bar__item"><Link to="/" className="nav-bar__link">Home</Link></li>
        <li className="nav-bar__item"><Link to="/how-to-adopt" className="nav-bar__link">How to adopt?</Link></li>
        <li className="nav-bar__item"><Link to="/dogs" className="nav-bar__link">Dogs</Link></li>
        <li className="nav-bar__item"><Link to="/cats" className="nav-bar__link">Cats</Link></li>
        <li className='nav-bar__item' ><Link className='nav-bar__link' to="/adoption-list"><SiDatadog size={40} className='.nav-bar__adoption-list-icon'/></Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
