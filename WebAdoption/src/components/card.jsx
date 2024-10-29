import React, { useState } from "react";
import "../assets/styles/components/card.css";
import Modal from "./modal";
import Button from "./button";

const Card = ({ title, description, imageUrl, buttonLabel }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card__container">
      <img src={imageUrl} alt={title} className="card__image" />
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
        <Button className="card__button" label={buttonLabel} onClick={handleOpenModal} />
      </div>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
};

export default Card;


