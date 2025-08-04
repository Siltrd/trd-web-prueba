import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // IMPORTANTE: Agregar BrowserRouter
import './styles/index.css';  // Estilos globales
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  {/* Asegúrate de envolver la aplicación en BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
