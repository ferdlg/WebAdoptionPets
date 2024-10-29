import "../assets/styles/components/modal.css";

// Modal.js
import React from "react";
import "../assets/styles/components/modal.css";

const Modal = ({ onClose }) => {
  const handleClose = () => {
    console.log("Cerrar modal");
    onClose();
  };
  const name = "Gatito";
  const breeds = "Gatito";
  const temperament = "Gatito";
  const origin = "Gatito";
  const lifeSpan = "Gatito";
  const moreInfo = "Gatito";

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <div className="modal__pet-name">
          <h3>{name}</h3>
        </div>
        <div className="modal__pet-info">
          <p>{breeds}</p>
          <p>{temperament}</p>
          <p>{origin}</p>
          <p>{lifeSpan}</p>
          <p>{moreInfo}</p>
          <div className="modal-container-button">
          <button onClick={handleClose} className="modal__close">
            Cerrar
          </button>
          <button onClick={handleClose} className="modal__adoption">
            Adoptar
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;


