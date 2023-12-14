import { createBrowserRouter, redirect } from 'react-router-dom';

import Todo from '@/app';
import ErrorPage from '@/app/error';

export const routesConfig = [
  {
    path: '/',
    loader: () => redirect('/todo'),
    errorElement: <ErrorPage />,
  },
  {
    path: '/todo',
    element: <Todo />,
    errorElement: <ErrorPage />,
  },
];

export const router = createBrowserRouter(routesConfig);
