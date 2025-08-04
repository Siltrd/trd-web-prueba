import HeroTDR from '../components/HeroTDR';
import PageTwo from '../components/PageTwo';
import ContactPage from '../pages/ContactPage';
import NotFound from '../pages/NotFound';

export const routes = [
  {
    path: '/',
    element: (
      <>
        <HeroTDR />
        <PageTwo />
      </>
    )
  },
  { path: '/contacto', element: <ContactPage /> },
  { path: '*', element: <NotFound /> }
];
