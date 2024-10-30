import React from 'react';
import '../../../assets/styles/components/stepCard.css';

const StepCard = ({ image, text, stepNumber }) => {
  return (
    <div className="step-card" style={{ "--offset": `${stepNumber * 20}px` }}>
      <div className="step-card__number">{stepNumber}</div>
      <img src={image} alt={text} className="step-card__image" />
      <p className="step-card__text">{text}</p>
    </div>
  );
};

export default StepCard;
