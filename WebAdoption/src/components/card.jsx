import React, { useState } from "react";
import "../assets/styles/components/card.css";
import Modal from "./modal";
import Button from "./button";

const Card = ({ dataPet,onOpenModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    onOpenModal();
  };

  const handleCloseModal = (data) => {
    setIsModalOpen(false);
  };

  return (
    <div className="card__container">
      <img src={dataPet.url} className="card__image" />
      <div className="card__content">
        <h2 className="card__title">{dataPet.name}</h2>
        <Button className="card__button" onClick={handleOpenModal} />
      </div>
      {isModalOpen && <Modal onClose={handleCloseModal} dataPet={dataPet} />}
    </div>
  );
};

export default Card;


