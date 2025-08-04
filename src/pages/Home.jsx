import React from 'react';
import Header from '../components/Header';
import HeroTDR from '../components/HeroTDR';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bienvenido a TDR - Túnica de Realidad</title>
        <meta name="description" content="Transformación profunda con TDR. Descubre herramientas para el autoconocimiento y la claridad estratégica." />
      </Helmet>
      <Header />
      <HeroTDR />
    </>
  );
};

export default Home;
