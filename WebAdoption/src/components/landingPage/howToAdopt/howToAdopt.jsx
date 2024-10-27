import React, { useState } from 'react';
import "../../../assets/styles/adopt/howToAdopt.css"; // Archivo CSS para estilos

// Importar imágenes ya existentes
import awwImage from '../../../assets/imagenes/aww.jpg';
import duoImage from '../../../assets/imagenes/duo.jpg';
import formImage from '../../../assets/imagenes/adopta.png';
import respetImage from '../../../assets/imagenes/respet.png';
import homeImage from '../../../assets/imagenes/home.jpg';
import perro_y_gato from '../../../assets/imagenes/perro-y-gato.jpg';

const HowToAdopt = () => {
  // Estado para almacenar qué pasos están completados
  const [completedSteps, setCompletedSteps] = useState([false, false, false, false, false, false]);

  // Función para marcar un paso como completado
  const toggleCompleted = (index) => {
    setCompletedSteps((prevSteps) => {
      const newSteps = [...prevSteps];
      newSteps[index] = !newSteps[index];
      return newSteps;
    });
  };

  const steps = [
    { image: awwImage, text: '1. Encuentra un animal que te interese' },
    { image: duoImage, text: '2. Visita el refugio para conocerlo en persona' },
    { image: formImage, text: '3. Llena la solicitud de adopción' },
    { image: respetImage, text: '4. Realiza una entrevista breve' },
    { image: homeImage, text: '5. Completa el proceso ' },
    { image: perro_y_gato, text: '6. Lleva a casa a tu nuevo amigo' },
  ];

  return (
    <div className="how-to-adopt-grid">
      <h1 className="title">Pasos para Adoptar un Animal</h1>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <img src={step.image} alt={`Paso ${index + 1}`} className="icon-image" />
            <p className="step-text">{step.text}</p>
            <button
              className={`toggle-button ${completedSteps[index] ? 'completed' : ''}`}
              onClick={() => toggleCompleted(index)}
            >
              {completedSteps[index] ? '✔️ Completado' : 'Marcar como completado'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToAdopt;
