import React from 'react';
import { createRoot } from 'react-dom/client';
// eslint-disable-next-line import/namespace
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
]);

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
