import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout';
import TestLayout from './components/TestLayout';
import ScrollToTop from './components/ScrollToTop';

import HeroTDR from './components/HeroTDR';
import PageTwo from './components/PageTwo';

const SobreMi = React.lazy(() => import('./pages/SobreMi'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const TestDireccion = React.lazy(() => import('./pages/TestDireccion'));
const TestDiscurso = React.lazy(() => import('./pages/TestDiscurso'));

const QuizDireccion = React.lazy(() => import('./tests/QuizDireccion'));
const QuizDiscurso = React.lazy(() => import('./tests/QuizDiscurso'));
const ResultDireccion = React.lazy(() => import('./tests/ResultDireccion'));
const ResultDiscurso = React.lazy(() => import('./tests/ResultDiscurso'));

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div>Cargando…</div>}>
        <Routes>
          {/* Layout general */}
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <>
                  <HeroTDR />
                  <PageTwo />
                </>
              }
            />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/contacto" element={<ContactPage />} />

            {/* Redirect de legado (si alguien llega por enlaces viejos) */}
            <Route path="/otros-tests" element={<Navigate to="/" replace />} />

            {/* Landings individuales */}
            <Route path="/test-direccion" element={<TestDireccion />} />
            <Route path="/test-discurso" element={<TestDiscurso />} />
          </Route>

          {/* Layout exclusivo para tests (quiz/result) */}
          <Route element={<TestLayout />}>
            <Route path="/test-direccion/quiz" element={<QuizDireccion />} />
            <Route path="/test-discurso/quiz" element={<QuizDiscurso />} />
            <Route path="/test-direccion/result" element={<ResultDireccion />} />
            <Route path="/test-discurso/result" element={<ResultDiscurso />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
