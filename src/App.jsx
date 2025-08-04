import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts y componentes
import Layout from './components/Layout';
import TestLayout from './components/TestLayout';
import ScrollToTop from './components/ScrollToTop';

// Componentes Home
import HeroTDR from './components/HeroTDR';
import PageTwo from './components/PageTwo';

// Lazy Pages
const SobreMi = React.lazy(() => import('./pages/SobreMi'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const OtrosTests = React.lazy(() => import('./pages/OtrosTests'));  // Página con ambos tests
const TestDireccion = React.lazy(() => import('./pages/TestDireccion'));
const TestDiscurso = React.lazy(() => import('./pages/TestDiscurso'));

// Lazy Tests
const QuizDireccion = React.lazy(() => import('./tests/QuizDireccion'));
const QuizDiscurso = React.lazy(() => import('./tests/QuizDiscurso'));
const ResultDireccion = React.lazy(() => import('./tests/ResultDireccion'));
const ResultDiscurso = React.lazy(() => import('./tests/ResultDiscurso'));

function App() {
  return (
    <>
      <ScrollToTop />
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
          <Route
            path="/sobre-mi"
            element={
              <Suspense fallback={<div>Cargando...</div>}>
                <SobreMi />
              </Suspense>
            }
          />
          <Route
            path="/contacto"
            element={
              <Suspense fallback={<div>Cargando...</div>}>
                <ContactPage />
              </Suspense>
            }
          />
          <Route
            path="/otros-tests"
            element={
              <Suspense fallback={<div>Cargando...</div>}>
                <OtrosTests />
              </Suspense>
            }
          />
          {/* Landings individuales de los tests */}
          <Route
            path="/test-direccion"
            element={
              <Suspense fallback={<div>Cargando Test Dirección...</div>}>
                <TestDireccion />
              </Suspense>
            }
          />
          <Route
            path="/test-discurso"
            element={
              <Suspense fallback={<div>Cargando Test Discurso...</div>}>
                <TestDiscurso />
              </Suspense>
            }
          />
        </Route>

        {/* Layout exclusivo para tests */}
        <Route
          element={
            <Suspense fallback={<div>Cargando layout de test...</div>}>
              <TestLayout />
            </Suspense>
          }
        >
          <Route
            path="/test-direccion/quiz"
            element={
              <Suspense fallback={<div>Cargando...</div>}>
                <QuizDireccion />
              </Suspense>
            }
          />
          <Route
            path="/test-discurso/quiz"
            element={
              <Suspense fallback={<div>Cargando...</div>}>
                <QuizDiscurso />
              </Suspense>
            }
          />
          <Route
            path="/test-direccion/result"
            element={
              <Suspense fallback={<div>Cargando...</div>}>
                <ResultDireccion />
              </Suspense>
            }
          />
          <Route
            path="/test-discurso/result"
            element={
              <Suspense fallback={<div>Cargando...</div>}>
                <ResultDiscurso />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
