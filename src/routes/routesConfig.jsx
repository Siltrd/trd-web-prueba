import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import Layout from '../components/Layout';
import TestLayout from '../components/TestLayout';

// Home
import HomeHero from '../components/HomeHero';
import HomeSectionTwo from '../components/HomeSectionTwo';
import HomeSectionThree from '../components/HomeSectionThree';
import HomeSectionFour from '../components/HomeSectionFour';

// Pages
const SobreMi = lazy(() => import('../pages/SobreMi'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Proximamente = lazy(() => import('../pages/Proximamente'));

// Legal
const TerminosCondiciones = lazy(() =>
  import('../legal/TerminosCondiciones')
);

const Privacidad = lazy(() =>
  import('../legal/Privacidad')
);

const Cookies = lazy(() =>
  import('../legal/Cookies')
);

const ReservasDevoluciones = lazy(() =>
  import('../legal/ReservasDevoluciones')
);

const Arrepentimiento = lazy(() =>
  import('../legal/Arrepentimiento')
);

const BajaServicio = lazy(() =>
  import('../legal/BajaServicio')
);

// Landing de tests
const TestsIndex = lazy(() => import('../pages/TestsIndex'));

// Landings individuales
const TestDireccion = lazy(() => import('../pages/TestDireccion'));
const TestDiscurso = lazy(() => import('../pages/TestDiscurso'));

// Flujos de test
const QuizDireccion = lazy(() => import('../tests/QuizDireccion'));
const QuizDiscurso = lazy(() => import('../tests/QuizDiscurso'));
const ResultDireccion = lazy(() => import('../tests/ResultDireccion'));
const ResultDiscurso = lazy(() => import('../tests/ResultDiscurso'));

export const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <>
            <HomeHero />
            <HomeSectionTwo />
            <HomeSectionThree />
            <HomeSectionFour />
          </>
        ),
      },

      {
        path: '/sobre-mi',
        element: <SobreMi />,
      },

      {
        path: '/contacto',
        element: <ContactPage />,
      },

      // Legal
      {
        path: '/terminos-y-condiciones',
        element: <TerminosCondiciones />,
      },

      {
        path: '/privacidad',
        element: <Privacidad />,
      },

      {
        path: '/cookies',
        element: <Cookies />,
      },

      {
        path: '/reservas-cancelaciones-devoluciones',
        element: <ReservasDevoluciones />,
      },

      {
        path: '/arrepentimiento',
        element: <Arrepentimiento />,
      },

      {
        path: '/baja-de-servicio',
        element: <BajaServicio />,
      },

      // Tests
      {
        path: '/tests',
        element: <TestsIndex />,
      },

      {
        path: '/tests/direccion',
        element: <Navigate to="/test-direccion" replace />,
      },

      {
        path: '/tests/discurso',
        element: <Navigate to="/test-discurso" replace />,
      },

      {
        path: '/tests/direccion/quiz',
        element: <Navigate to="/test-direccion/quiz" replace />,
      },

      {
        path: '/tests/discurso/quiz',
        element: <Navigate to="/test-discurso/quiz" replace />,
      },

      {
        path: '/tests/direccion/result',
        element: <Navigate to="/test-direccion/result" replace />,
      },

      {
        path: '/tests/discurso/result',
        element: <Navigate to="/test-discurso/result" replace />,
      },

      {
        path: '/proximamente',
        element: <Proximamente />,
      },

      {
        path: '/test-direccion',
        element: <TestDireccion />,
      },

      {
        path: '/test-discurso',
        element: <TestDiscurso />,
      },

      {
        path: '/otros-tests',
        element: <Navigate to="/tests" replace />,
      },
    ],
  },

  {
    element: <TestLayout />,
    children: [
      {
        path: '/test-direccion/quiz',
        element: <QuizDireccion />,
      },

      {
        path: '/test-discurso/quiz',
        element: <QuizDiscurso />,
      },

      {
        path: '/test-direccion/result',
        element: <ResultDireccion />,
      },

      {
        path: '/test-discurso/result',
        element: <ResultDiscurso />,
      },
    ],
  },

  {
    path: '*',
    element: <NotFound />,
  },
];