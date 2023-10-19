// * Base
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import React from 'react';

// * Store
import store from './store/store.ts';

// * Routes
import router from './routes.tsx';

// * Styles(global)
import './index.css';

// * Render
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
