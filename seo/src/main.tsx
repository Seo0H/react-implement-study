import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';

import TodoList from '@/app';
import ErrorPage from '@/app/error';

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => redirect('/todo'),
    errorElement: <ErrorPage />,
  },
  {
    path: '/todo',
    element: <TodoList />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
