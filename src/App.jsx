// src/App.jsx
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { authConfig } from './auth_config';
import { Auth0Provider } from '@auth0/auth0-react';

// Layouts
import Layout from './components/Layout';
import TestLayout from './components/TestLayout';

// Auth
import PrivateRoute from './routes/PrivateRoute';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import CallbackPage from './pages/CallbackPage';

// Páginas y Tests
import ScrollToTop from './components/ScrollToTop';
import HeroTRD from './components/HeroTRD';
import PageTwo from './components/PageTwo';
import TestLanding from './pages/TestLanding';

// Lazy loaded
const SobreMi = React.lazy(() => import('./pages/SobreMi'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const OtrosTests = React.lazy(() => import('./pages/OtrosTestsAntiguo'));
const QuizDireccion = React.lazy(() => import('./tests/QuizDireccion'));
const QuizDiscurso = React.lazy(() => import('./tests/QuizDiscurso'));
const TestDireccion = React.lazy(() => import('./pages/TestDireccion'));
const TestDiscurso = React.lazy(() => import('./pages/TestDiscurso'));
const ResultDireccion = React.lazy(() => import('./tests/ResultDireccion'));
const ResultDiscurso = React.lazy(() => import('./tests/ResultDiscurso'));

function App() {
  return (
    <Auth0Provider
      domain={authConfig.domain}
      clientId={authConfig.clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
      cacheLocation="localstorage"
    >
      <AppProvider>
        <ScrollToTop />
        <Routes>
          {/* Layout principal */}
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <>
                  <HeroTRD />
                  <PageTwo />
                </>
              }
            />
            <Route path="/otros-tests" element={<TestLanding />} />
            <Route path="/test-direccion" element={<TestDireccion />} />
            <Route path="/test-discurso" element={<TestDiscurso />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/perfil"
              element={
                <PrivateRoute>
                  <Perfil />
                </PrivateRoute>
              }
            />
          </Route>

          {/* Layout exclusivo para tests */}
          <Route element={<TestLayout />}>
            <Route
              path="/test-direccion/quiz"
              element={
                <Suspense fallback={<div>Loading quiz...</div>}>
                  <QuizDireccion />
                </Suspense>
              }
            />
            <Route
              path="/test-discurso/quiz"
              element={
                <Suspense fallback={<div>Loading quiz...</div>}>
                  <QuizDiscurso />
                </Suspense>
              }
            />
            <Route path="/test-direccion/result" element={<ResultDireccion />} />
            <Route path="/test-discurso/result" element={<ResultDiscurso />} />
          </Route>

          {/* Callback de Auth0 */}
          <Route path="/callback" element={<CallbackPage />} />
        </Routes>
      </AppProvider>
    </Auth0Provider>
  );
}

export default App;
