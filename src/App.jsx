// src/App.jsx
import React from 'react';
import './styles/index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import TestPage from './pages/TestPage';

function App() {
  return (
    <div className="App">
      <Header />

      <Main />

      <Footer>
        <p>&copy; 2025 TRD. Todos los derechos reservados.</p>
      </Footer>
    </div>
  );
}

export default App;
