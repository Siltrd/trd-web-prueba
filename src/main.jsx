import './styles/global.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './styles/index.css';

// ✅ Importa el candado temporal
import Gate from './Gate';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        {/* 🔒 Candado temporal: bloquea todo hasta ingresar la contraseña */}
        <Gate />
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
