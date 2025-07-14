import React from 'react';
import fotoProvisoria from '../assets/images/fotoProvisoria.jpg';

const Main = () => {
  return (
    <main>
      <div className="main-background"></div>

      <div className="container">
        {/* Columna izquierda */}
        <section className="left-column" role="region" aria-labelledby="left-column">
          <div className="text-box text-box-1">
            <p><strong>Tenés el poder de transformarte</strong></p>
          </div>

          <div className="text-box text-box-2">
            <p>Descubrí herramientas prácticas para salir del bucle mental y emocional. Rediseñar una dirección propia sin fórmulas vacías ni frases hechas.</p>
          </div>

          <div className="mobile-photo-wrapper">
            <img
              src={fotoProvisoria}
              alt="TRD Foto"
              loading="lazy"
              width="554"
              height="554"
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="text-box text-box-3">
            <ul className="checklist">
              <li><img src="/images/checkmark-bco.png" alt="Checkmark" className="checkmark-icon" /> Reescribí tu discurso interno y externo</li>
              <li><img src="/images/checkmark-bco.png" alt="Checkmark" className="checkmark-icon" /> Rompé con patrones que ya no te representan</li>
              <li><img src="/images/checkmark-bco.png" alt="Checkmark" className="checkmark-icon" /> Elegí dirección con estructura, no desde la urgencia</li>
            </ul>
          </div>

          <div className="text-box text-box-4">
            <div className="block-buttons">
              <button>Empezar mi viaje</button>
              <button>Recursos gratuitos</button>
            </div>
          </div>

          <div className="text-box text-box-5">
            <p><strong>TRD es una plataforma de transformación estratégica. Acompañamos tanto procesos personales como profesionales desde estructura, dirección y verdad.</strong></p>
          </div>
        </section>

        {/* Columna derecha */}
        <section className="right-column" role="region" aria-labelledby="right-column">
          <div className="Foto">
            <img
              src={fotoProvisoria}
              alt="Foto TRD"
              loading="lazy"
              width="554"
              height="554"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
