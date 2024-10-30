import React from "react";
import respeto from '/src/assets/images/respet.png';
import "/src/assets/styles/components/_aboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <img src={respeto} alt="Imagen de respeto" className="about-us__image" />
      <p className="about-us__text">
        Somos una organización sin fines de lucro, enfocada en la protección animal.
        Hemos contactado a un equipo de desarrolladores para crear una plataforma
        que fomente la adopción de perros y gatos en refugios locales. Contratamos
        a desarrolladoras del SENA para satisfacer las necesidades de la organización.
      </p>
    </div>
  );
};

export default AboutUs;
