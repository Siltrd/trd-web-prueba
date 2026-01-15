// src/routes/routesConfig.jsx
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// Layouts (no-lazy para carga inicial)
import Layout from '../components/Layout';
import TestLayout from '../components/TestLayout';

// Home (componentes atómicos, no-lazy para mejorar LCP)
import HeroTDR from '../components/HeroTDR';
import PageTwo from '../components/PageTwo';

// Pages (lazy)
const SobreMi = lazy(() => import('../pages/SobreMi'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Landing de tests (lazy)
const TestsIndex = lazy(() => import('../pages/TestsIndex'));

// Landings individuales (lazy)
const TestDireccion = lazy(() => import('../pages/TestDireccion'));
const TestDiscurso = lazy(() => import('../pages/TestDiscurso'));

// Flujos de test (quiz/result) (lazy)
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
            <HeroTDR />
            <PageTwo />
          </>
        ),
      },
      { path: '/sobre-mi', element: <SobreMi /> },
      { path: '/contacto', element: <ContactPage /> },

      // Landing que lista ambos tests
      { path: '/tests', element: <TestsIndex /> },

      // Landings individuales
      { path: '/test-direccion', element: <TestDireccion /> },
      { path: '/test-discurso', element: <TestDiscurso /> },

      // Redirect legado
      { path: '/otros-tests', element: <Navigate to="/tests" replace /> },
    ],
  },
  {
    element: <TestLayout />,
    children: [
      { path: '/test-direccion/quiz', element: <QuizDireccion /> },
      { path: '/test-discurso/quiz', element: <QuizDiscurso /> },
      { path: '/test-direccion/result', element: <ResultDireccion /> },
      { path: '/test-discurso/result', element: <ResultDiscurso /> },
    ],
  },
  { path: '*', element: <NotFound /> },
];
