import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/styles/components/navBar.css';
import { SiDatadog } from "react-icons/si";


const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar__list">
        <li className="nav-bar__item"><Link to="/" className="nav-bar__link">Home</Link></li>
<<<<<<< HEAD
        <li className="nav-bar__item"><Link to="/how-to-adopt" className="nav-bar__link">¿Cómo Adoptar?</Link></li>
        <li className="nav-bar__item"><a href="#dogs" className="nav-bar__link">Perros</a></li>
        <li className="nav-bar__item"><a href="#cats" className="nav-bar__link">Gatos</a></li>
        <li className="nav-bar__item"><Link to="/about_us" className="nav-bar__link"> Quienes Somos?</Link></li> 
=======
        <li className="nav-bar__item"><Link to="/how-to-adopt" className="nav-bar__link">How to adopt?</Link></li>
        <li className="nav-bar__item"><Link to="/dogs" className="nav-bar__link">Dogs</Link></li>
        <li className="nav-bar__item"><Link to="/cats" className="nav-bar__link">Cats</Link></li>
        <li className='nav-bar__item' ><Link className='nav-bar__link' to="/adoption-list"><SiDatadog size={40} className='.nav-bar__adoption-list-icon'/></Link></li>
>>>>>>> d97510f07cb7eb238a17416b0a1bad38dce09ffc
      </ul>
    </nav>
  );
};

export default NavBar;
