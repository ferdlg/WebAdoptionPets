import "../assets/styles/components/modal.css";
import React from "react";
import {  useDispatch } from "react-redux";
import { addToAdopted} from "../redux/Slices/cartSlice";

const Modal = ({ onClose, dataPet }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    console.log("Cerrar modal");
    onClose();
  };
  const breed = dataPet.breeds && dataPet.breeds.length > 0 ? dataPet.breeds[0] : null;

  const handleAdopt = ()=>{
    const petToAdopt = {
      id: dataPet.id, 
      url: dataPet.url,
      name: breed ? breed.name : 'Nombre no disponible',
      temperament: breed ? breed.temperament : 'Temperamento no disponible',
      life_span: breed ? breed.life_span : 'Esperanza de vida no disponible',
      wikipedia_url: breed ? breed.wikipedia_url : 'URL de Wikipedia no disponible',
      adopted: true 
    };
    console.log("Adoptando mascota:", petToAdopt);
    dispatch(addToAdopted(petToAdopt));
    onClose();
  }


  return (
    <div className="modal__overlay" onClick={handleClose}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <div className="modal__pet-name">
          <h3>{breed ? breed.name : 'Nombre no disponible'}</h3>
        </div>
        <div className="modal__pet-info">
          <p>{breed ? breed.temperament : 'Temperamento no disponible'}</p>
          <p>{breed ? breed.origin : 'Origen no disponible'}</p>
          <p>{breed ? breed.life_span : 'Esperanza de vida no disponible'}</p>
          <p>{breed ? breed.wikipedia_url : 'URL de Wikipedia no disponible'}</p>
          <button onClick={handleClose} className="modal__close">
            Cerrar
          </button>
          <button onClick={handleAdopt} className="modal__adoption">
            Adoptar
          </button>
          </div>
        </div>
      </div>
  );
};

export default Modal;
