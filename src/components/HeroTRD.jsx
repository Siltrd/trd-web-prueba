import React from 'react';
import '../styles/heroTRD.css';
import checkmark from '../assets/images/checkmark-bco.png';
import fotoProvisoria from '../assets/images/fotoProvisoria.jpg';
import fotoMovil from '../assets/images/foto-movil.png';


const HeroTRD = () => {
  return (
    <section className="hero__section">
      <div className="hero__wrapper">
        {/* Columna izquierda: Texto */}
        <div className="hero__left-column">
          <div className="hero__text-box hero__box1">
            Tenés el poder de transformarte
          </div>
          <div className="hero__text-box hero__box2">
            Descubrí herramientas prácticas para salir del bucle mental y emocional rediseñando una dirección propia sin fórmulas vacías ni frases hechas.
          </div>
          <div className="hero__text-box hero__box3">
            <div className="hero__checkmark">
              <img src={checkmark} alt="Checkmark" />
              Reescribí tu discurso interno y externo.
            </div>
            <div className="hero__checkmark">
              <img src={checkmark} alt="Checkmark" />
              Rompé con patrones que ya no te representan.
            </div>
            <div className="hero__checkmark">
              <img src={checkmark} alt="Checkmark" />
              Elegí dirección con estructura, no desde la urgencia.
            </div>
          </div>
          <div className="hero__box-buttons">
            <button>Empezar mi viaje</button>
            <button>Recursos gratuitos</button>
          </div>

          {/* Foto móvil duplicada, solo visible en 768px */}
          <div className="hero__mobile-foto-wrapper">
            <img src={fotoMovil} alt="Foto móvil" className="hero__mobile-foto" />
          </div>

          <div className="hero__text-box hero__box5">
            TRD es una plataforma de transformación estratégica. Acompañamos procesos personales y profesionales desde estructura, dirección y verdad.
          </div>
        </div>

        {/* Columna derecha: Foto para escritorio */}
        <div className="hero__right-column">
          <div className="hero__visuals-wrapper">
            <img className="hero__foto" src={fotoProvisoria} alt="Foto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTRD;
