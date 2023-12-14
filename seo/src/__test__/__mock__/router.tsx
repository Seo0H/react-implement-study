import { redirect } from 'react-router';

import TodoList from '@/app';
import ErrorPage from '@/app/error';

export const routesMockConfig = [
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
];
