// src/index.js
import './styles/index.css';  // Asegúrate de importar los estilos globales aquí
import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambiado a 'react-dom/client' en React 18
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />  {/* Elimina <React.StrictMode> */}
);
