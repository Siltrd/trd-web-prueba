import React from 'react';
import './main-section.css';

const MainSection = () => {
  return (
    <main>
      <div className="container">
        <section className="left-column">
          <div className="text-box text-box-1">
            <p><strong>Tenés el poder de transformarte</strong></p>
          </div>
          <div className="text-box text-box-2">
            <p>Descubrí herramientas prácticas para salir del bucle mental...</p>
          </div>
          {/* Otros bloques de texto y contenido */}
        </section>
        <section className="right-column">
          <div className="Foto">
            <img src="path-to-your-image.jpg" alt="TRD Foto" />
          </div>
        </section>
      </div>
    </main>
  );
};

export default MainSection;
