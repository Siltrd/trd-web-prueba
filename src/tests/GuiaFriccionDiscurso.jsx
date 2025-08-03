import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';

const Friccion = () => {
  return (
    <main className="home-container" style={{ padding: '3rem 2rem' }}>
      <section className="producto-landing" style={{ maxWidth: '720px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', color: '#1e364d', marginBottom: '1rem' }}>
          Guía TRD · Aprovechá tu fricción
        </h1>

        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          Cuando algo en vos quiere avanzar, pero otra parte tira del freno.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid #ccc', marginBottom: '2rem' }} />

        <div style={{ lineHeight: '1.7' }}>
          <p><strong>Diagnóstico:</strong> Hay algo en vos que quiere avanzar, y otra parte que tira del freno. No estás inmóvil, pero tampoco en marcha plena. Vivís en un diálogo interno constante, una especie de ruido de fondo que te acompaña aunque no lo nombres. Esa tensión que te incomoda… también contiene energía. Tenés una chispa encendida. Solo falta dirigirla.</p>

          <p><strong>Imagen simbólica:</strong> Sos como un arco cargado: si no soltás, te vas a desgastar. Pero si apuntás con claridad, vas a generar dirección real.</p>

          <p><strong>Coste de no actuar:</strong> El conflicto no resuelto te hace girar en círculos. Gastás energía vital en sostener una posición ambigua. Y mientras tanto, la claridad no llega sola.</p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '2rem 0' }} />

        <section>
          <h2 style={{ fontSize: '1.3rem', color: '#3c5a46' }}>
            ¿Qué incluye esta guía?
          </h2>
          <ul style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
            <li>✔️ Hoja editable con 3 focos</li>
            <li>✔️ Un ejemplo real de uso</li>
            <li>✔️ Bonus: Audio “la pregunta que cambia el eje”</li>
          </ul>

          <p style={{ fontStyle: 'italic', color: '#3c5a46' }}>
            No se trata de elegir entre impulso o duda. Se trata de convertir esa fricción en dirección.
          </p>

          <p style={{ marginTop: '1rem' }}><strong>Precio:</strong> $9</p>
          <p><strong>Acceso:</strong> Descarga inmediata + audio extra</p>
        </section>

        <div style={{ marginTop: '2rem' }}>
          <a
            href={`https://wa.me/5491157041750?text=${encodeURIComponent(
              'Hola TRD, quiero acceder a la guía "Fricción productiva". ¿Cómo seguimos?'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="boton-trd"
          >
            Quiero acceder a esta guía
          </a>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <Link to="/productos" className="volver-link">← Volver a todos los productos</Link>
        </div>
      </section>
    </main>
  );
};

export default Friccion;
