import HeroTRD from '../components/HeroTRD';
import PageTwo from '../components/PageTwo';
import ContactPage from '../pages/ContactPage';
import NotFound from '../pages/NotFound';
import CallbackPage from '../pages/CallbackPage';
import TestLanding from '../pages/TestLanding';

export const routes = [
  {
    path: '/',
    element: (
      <>
        <HeroTRD />
        <PageTwo />
      </>
    )
  },
  { path: '/otros-tests', element: <TestLanding /> },
  { path: '/contacto', element: <ContactPage /> },
  { path: '/callback', element: <CallbackPage /> },
  { path: '*', element: <NotFound /> }
];
