import React, {useState} from "react";
import "../assets/styles/components/card.css"
import Modal from "./modal";
import Button from "./button";
import "../assets/image/huella.png"
const Card = ({ title, description, imageUrl, buttonLabel }) => {
 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <Button className="card-button" label={buttonLabel}  onClick={handleOpenModal}/>
        </div>
      {isModalOpen && <Modal onClose ={handleCloseModal} />}
      </div>
    
  );
};

export default Card;
