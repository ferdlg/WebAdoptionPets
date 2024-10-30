import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/styles/components/navBar.css';
import { SiDatadog } from "react-icons/si";
import Cart from '../../cart/cart';


const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    
  };
  const handleCloseModal = (data) => {
    setIsModalOpen(false);
  };
  return (
    <>
    <nav className="nav-bar">
      <ul className="nav-bar__list">
        <li className="nav-bar__item"><Link to="/" className="nav-bar__link">Home</Link></li>
        <li className="nav-bar__item"><Link to="/how-to-adopt" className="nav-bar__link">How to adopt?</Link></li>
        <li className="nav-bar__item"><Link to="/dogs" className="nav-bar__link">Dogs</Link></li>
        <li className="nav-bar__item"><Link to="/cats" className="nav-bar__link">Cats</Link></li>
        <li className='nav-bar__item' ><SiDatadog size={40} className='.nav-bar__adoption-list-icon' onClick={handleOpenModal}/></li>
      </ul>
    </nav>
      {isModalOpen && <Cart onClose={handleCloseModal}/>}
    </>
  );
};

export default NavBar;
