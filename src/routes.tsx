// * Base
import { createBrowserRouter } from 'react-router-dom';
import { ReactNode, Suspense, lazy } from 'react';

// * App
import App from './App';

// * Components
import Loading from './components/Loading/Loading';

// * Pages
const ConsultationForm = lazy(() => import('./pages/ConsultationForm/ConsultationForm')),
  PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy/PrivacyPolicy')),
  ForTeaching = lazy(() => import('./pages/ForTeaching/ForTeaching')),
  UsefulLinks = lazy(() => import('./pages/UsefulLinks/UsefulLinks')),
  TermsOfUse = lazy(() => import('./pages/TermsOfUse/TermsOfUse')),
  Support = lazy(() => import('./pages/Support/Support')),
  Courses = lazy(() => import('./pages/Courses/Courses')),
  SiteMap = lazy(() => import('./pages/SiteMap/SiteMap')),
  Error = lazy(() => import('./pages/Error/Error')),
  About = lazy(() => import('./pages/About/About')),
  Blog = lazy(() => import('./pages/Blog/Blog')),
  Home = lazy(() => import('./pages/Home/Home')),
  Faq = lazy(() => import('./pages/Faq/Faq'));

function Element({ component }: { component: ReactNode }) {
  return <Suspense fallback={<Loading />}>{component}</Suspense>;
}

// * Routers
export default createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Element component={<Home />} />,
      },
      {
        path: '/courses',
        element: <Element component={<Courses />} />,
      },
      {
        path: '/about',
        element: <Element component={<About />} />,
      },
      {
        path: '/consultation-form',
        element: <Element component={<ConsultationForm />} />,
      },
      {
        path: '/privacy-policy',
        element: <Element component={<PrivacyPolicy />} />,
      },
      {
        path: '/blog',
        element: <Element component={<Blog />} />,
      },
      {
        path: '/faq',
        element: <Element component={<Faq />} />,
      },
      {
        path: '/teaching',
        element: <Element component={<ForTeaching />} />,
      },
      {
        path: '/support',
        element: <Element component={<Support />} />,
      },
      {
        path: '/sitemap',
        element: <Element component={<SiteMap />} />,
      },
      {
        path: '/terms-of-use',
        element: <Element component={<TermsOfUse />} />,
      },
      {
        path: '/useful-links',
        element: <Element component={<UsefulLinks />} />,
      },
      {
        path: '*',
        element: <Element component={<Error />} />,
      },
    ],
  },
]);
