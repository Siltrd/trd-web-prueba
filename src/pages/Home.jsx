import React from 'react';
import Header from '../components/Header';
import HeroTRD from '../components/HeroTRD';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bienvenido a TRD - Túnica de Realidad</title>
        <meta name="description" content="Transformación profunda con TRD. Descubre herramientas para el autoconocimiento y la claridad estratégica." />
      </Helmet>
      <Header />
      <HeroTRD />
    </>
  );
};

export default Home;
