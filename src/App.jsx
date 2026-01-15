// src/App.jsx
import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes/routesConfig.jsx';

import ScrollToTop from './components/ScrollToTop';
// detector de hover
import useHoverCapability from './hooks/useHoverCapability';

export default function App() {
  useHoverCapability();
  const element = useRoutes(routes);

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div>Cargando…</div>}>
        {element}
      </Suspense>
    </>
  );
}
