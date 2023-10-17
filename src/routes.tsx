// * Base
import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// * App
import App from './App';

// * Components
import Loading from './components/Loading/Loading';

// * Pages
const Courses = lazy(() => import('./pages/Courses/Courses'));
const Error = lazy(() => import('./pages/Error/Error'));
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));

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
