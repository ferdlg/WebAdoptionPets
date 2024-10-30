import React from 'react';
<<<<<<< HEAD:WebAdoption/src/pages/howToAdopt.jsx
import StepCard from "../components/landingPage/step_card/StepCard.jsx";
import '../assets/styles/components/_howtoadopt.css';
=======
import StepCard from "../../components/landingPage/step_card/StepCard.jsx";
import '../../assets/styles/components/howtoadopt.css';
>>>>>>> d97510f07cb7eb238a17416b0a1bad38dce09ffc:WebAdoption/src/pages/howToAdopt/howToAdopt.jsx

import awwImage from '../../assets/images/aww.jpg';
import duoImage from '../../assets/images/duo.jpg';
import formImage from '../../assets/images/adopta.png';
import respetImage from '../../assets/images/respet.png';
import homeImage from '../../assets/images/corazon.webp';
import perro_y_gato from '../../assets/images/perro-y-gato.jpg';
import pawVideo from '../../assets/video/ubication.mp4';

const HowToAdopt = () => {

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
