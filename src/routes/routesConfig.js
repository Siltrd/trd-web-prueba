// src/routes/routesConfig.js
import HeroTDR from '../components/HeroTRD';
import PageTwo from '../components/PageTwo';
import ContactPage from '../pages/ContactPage';
import NotFound from '../pages/NotFound';

// Tests (desde src/tests/)
import StartDireccion from '../tests/StartDireccion.jsx';
import QuizDireccion from '../tests/QuizDireccion.jsx';
import ResultDireccion from '../tests/ResultDireccion.jsx';

import StartDiscurso from '../tests/StartDiscurso.jsx';
import QuizDiscurso from '../tests/QuizDiscurso.jsx';
import ResultDiscurso from '../tests/ResultDiscurso.jsx';

export const routes = [
  {
    path: '/',
    element: (
      <>
        <HeroTDR />
        <PageTwo />
      </>
    ),
  },
  { path: '/contacto', element: <ContactPage /> },

  // Dirección
  { path: '/test-direccion', element: <StartDireccion /> },
  { path: '/test-direccion/quiz', element: <QuizDireccion /> },
  { path: '/test-direccion/result', element: <ResultDireccion /> },

  // Discurso
  { path: '/test-discurso', element: <StartDiscurso /> },
  { path: '/test-discurso/quiz', element: <QuizDiscurso /> },
  { path: '/test-discurso/result', element: <ResultDiscurso /> },

  { path: '*', element: <NotFound /> },
];
