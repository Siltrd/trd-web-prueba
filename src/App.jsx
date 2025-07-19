import React from 'react';
import Header from './components/Header'; // Importa el Header
import HeroTRD from './components/HeroTRD'; // Importa el HeroTRD
import Footer from './components/Footer'; // Importa el Footer

function App() {
  return (
    <div>
      <Header />
      <HeroTRD />
      <Footer /> {/* Agrega el Footer aquí */}
    </div>
  );
}

export default App;
