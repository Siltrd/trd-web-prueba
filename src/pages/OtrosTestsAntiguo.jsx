import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/homeTests.module.css';  // Corregido: Usando CSS Modules

const OtrosTests = () => {
  const navigate = useNavigate();

  return (
    <main style={{ textAlign: 'center', padding: '4rem', display: 'flex', justifyContent: 'center' }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '1rem',
        boxShadow: '0 6px 12px rgba(0,0,0,0.05)',
        maxWidth: '680px',
        width: '100%',
        fontFamily: 'Manrope, sans-serif'
      }}>
        <h1 style={{ color: '#1e364d', marginBottom: '1rem', fontSize: '1.8rem' }}>
          Tests simbólicos TRD
        </h1>
        <p style={{ marginBottom: '2rem', fontSize: '0.95rem', color: '#444' }}>
          Elegí desde dónde querés empezar a revisar tu realidad interna. Cada test está diseñado para darte un reflejo real y ayudarte a tomar decisiones con más claridad.
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          alignItems: 'center'
        }}>

          {/* TEST DE DISCURSO */}
          <div style={{ backgroundColor: '#fcfaf6', padding: '1.5rem', borderRadius: '1rem', width: '100%' }}>
            <h3 style={{ color: '#1e364d', marginBottom: '0.75rem' }}>🗣️ Test de Discurso</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              ¿Tu mensaje refleja lo que realmente hacés? Este test revela si tu discurso vende lo que ofrecés o si hay una desconexión entre forma y fondo.
            </p>
            <p style={{ fontSize: '0.95rem', fontWeight: '500', marginBottom: '1rem', color: '#3c5a46' }}>
              ¿Estás comunicando con presencia o repitiendo lo de siempre?
            </p>
            <button className={styles.botonTrd} onClick={() => navigate('/test-discurso/quiz')}>
              Hacer este test
            </button>
          </div>

          {/* TEST DE DIRECCIÓN */}
          <div style={{ backgroundColor: '#f1ebde', padding: '1.5rem', borderRadius: '1rem', width: '100%' }}>
            <h3 style={{ color: '#1e364d', marginBottom: '0.75rem' }}>🧭 Test de Dirección</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              ¿Dónde estás avanzando sin foco? Este test te muestra si tu energía está en fuga, en pausa o atrapada en bucles internos que sabotean tus decisiones.
            </p>
            <p style={{ fontSize: '0.95rem', fontWeight: '500', marginBottom: '1rem', color: '#3c5a46' }}>
              ¿Qué parte de tu energía está bloqueando tu avance?
            </p>
            <button className={styles.botonTrd} onClick={() => navigate('/test-direccion/quiz')}>
              Hacer este test
            </button>
          </div>

        </div>
      </div>
    </main>
  );
};

export default OtrosTests;

