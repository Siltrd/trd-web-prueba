import HeroTRD from '../components/HeroTRD';
import PageTwo from '../components/PageTwo';
import Fundadora from '../pages/Fundadora';
import TestPage from '../pages/TestPage';
import ContactPage from '../pages/ContactPage';
import NotFound from '../pages/NotFound';

export const routes = [
  { path: "/", element: <HeroTRD /> },
  { path: "/fundadora", element: <Fundadora /> },
  { path: "/test", element: <TestPage /> },
  { path: "/contacto", element: <ContactPage /> },
  { path: "*", element: <NotFound /> }
];
