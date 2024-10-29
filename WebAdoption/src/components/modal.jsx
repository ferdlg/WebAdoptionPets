import "../assets/styles/components/modal.css";
import React from "react";

const Modal = ({ onClose, dataPet }) => {
  const handleClose = () => {
    console.log("Cerrar modal");
    onClose();
  };
  console.log('Data Pet',dataPet)
  const breed = dataPet.breeds && dataPet.breeds.length > 0 ? dataPet.breeds[0] : null;

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
        </div>
      </div>
    </div>
  );
};

export default Modal;
