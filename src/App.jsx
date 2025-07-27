import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ Solo estas dos importaciones
import Header from './components/Header';
import Footer from './components/Footer';
import HeroTRD from './components/HeroTRD';
import PageTwo from './components/PageTwo';
import Fundadora from './pages/Fundadora';
import TestPage from './pages/TestPage';
import ScrollToTop from './components/ScrollToTop';
import ContactPage from './pages/ContactPage'; // ✅ ContactPage agregado


function App() {
  return (
    <>
      <ScrollToTop /> {/* ✅ Scroll al top al cambiar de ruta */}
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroTRD />
              <PageTwo />
            </>
          }
        />
        <Route path="/fundadora" element={<Fundadora />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/contacto" element={<ContactPage />} /> {/* ✅ Ruta agregada */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
