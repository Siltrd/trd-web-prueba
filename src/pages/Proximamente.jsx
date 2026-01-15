// src/pages/Proximamente.jsx
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Proximamente() {
  const { state } = useLocation();
  const titulo = state?.titulo || 'Disponible en breve';
  const detalle =
    state?.detalle ||
    'Estoy cerrando el MVP beta de TDR. Mientras tanto, podés empezar por el Test Dirección.';

  return (
    <main style={{ maxWidth: 820, margin: '0 auto', padding: '56px 20px' }}>
      <h1 style={{ fontSize: 34, marginBottom: 12 }}>{titulo}</h1>
      <p style={{ fontSize: 18, lineHeight: 1.5, opacity: 0.85, marginBottom: 28 }}>
        {detalle}
      </p>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Link to="/test-direccion" style={btn}>
          Hacer Test Dirección
        </Link>
        <Link to="/contacto" style={btnAlt}>
          Contacto
        </Link>
        <a href="https://wa.me/" style={btnGhost}>
          WhatsApp
        </a>
      </div>
    </main>
  );
}

const btn = {
  padding: '12px 16px',
  borderRadius: 12,
  textDecoration: 'none',
  fontWeight: 600,
  border: '1px solid rgba(0,0,0,0.15)',
};

const btnAlt = { ...btn, opacity: 0.9 };
const btnGhost = { ...btn, opacity: 0.75 };
