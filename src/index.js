// src/index.js
import './styles/index.css';  // Asegúrate de importar los estilos globales aquí
import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambiado a 'react-dom/client' en React 18
import App from './App';

// Crear el contenedor root para React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar la aplicación con React.StrictMode habilitado para detectar problemas
root.render(
  <React.StrictMode>
    <App />  // Esto activará las verificaciones adicionales para los componentes
  </React.StrictMode>
);
