// * Base
import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// * App
import App from './App';

// * Components
import Loading from './components/Loading/Loading';

// * Pages
const ConsultationForm = lazy(() => import('./pages/ConsultationForm/ConsultationForm')),
  PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy/PrivacyPolicy')),
  Courses = lazy(() => import('./pages/Courses/Courses')),
  Error = lazy(() => import('./pages/Error/Error')),
  About = lazy(() => import('./pages/About/About')),
  Home = lazy(() => import('./pages/Home/Home'));

// * Routers
export default createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/courses',
        element: (
          <Suspense fallback={<Loading />}>
            <Courses />
          </Suspense>
        ),
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/consultation-form',
        element: (
          <Suspense fallback={<Loading />}>
            <ConsultationForm />
          </Suspense>
        ),
      },
      {
        path: '/privacy-policy',
        element: (
          <Suspense fallback={<Loading />}>
            <PrivacyPolicy />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<Loading />}>
            <Error />
          </Suspense>
        ),
      },
    ],
  },
]);
