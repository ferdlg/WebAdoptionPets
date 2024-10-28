import React from 'react';
import { useNavigate } from 'react-router-dom';
import StepCard from "../components/landingPage/step_card/StepCard.jsx";
import '../assets/styles/components/howtoadopt.css';

import awwImage from '../assets/imagenes/aww.jpg';
import duoImage from '../assets/imagenes/duo.jpg';
import formImage from '../assets/imagenes/adopta.png';
import respetImage from '../assets/imagenes/respet.png';
import homeImage from '../assets/imagenes/corazon.webp';
import perro_y_gato from '../assets/imagenes/perro-y-gato.jpg';
import pawVideo from '../assets/video/ubication.mp4';

const HowToAdopt = () => {
  const navigate = useNavigate();

  const steps = [
    { image: awwImage, text: 'Encuentra un animal que te interese' },
    { image: duoImage, text: 'Visita el refugio para conocerlo en persona' },
    { image: formImage, text: 'Llena la solicitud de adopción' },
    { image: respetImage, text: 'Realiza una entrevista breve' },
    { image: homeImage, text: 'Completa el proceso y firma el contrato de adopción' },
    { image: perro_y_gato, text: 'Lleva a casa a tu nuevo amigo' },
  ];

  return (
    <div className="how-to-adopt">
      <button onClick={() => navigate('/')} className="how-to-adopt__back-button">
        ⬅ Volver a la página principal
      </button>
      <h1 className="how-to-adopt__title">¿Estás listo para adoptar?</h1>
      <div className="how-to-adopt__steps">
        {steps.map((step, index) => (
          <StepCard 
            key={index} 
            image={step.image} 
            text={step.text} 
            stepNumber={index + 1} 
          />
        ))}
      </div>
      
      <video className="mini-video" src={pawVideo} autoPlay loop muted />
    </div>
  );
};

export default HowToAdopt;
