// * Base
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';

// * Routes
import router from './routes.tsx';

ReactDOM.hydrateRoot(
  document.getElementById('app')!,
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
