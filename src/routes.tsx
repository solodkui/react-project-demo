// * Base
import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

// * App
import App from './App';

// * Pages
const Home = lazy(() => import('./pages/Home/Home'));

// * Routers
export default createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);
