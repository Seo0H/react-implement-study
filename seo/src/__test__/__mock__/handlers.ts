import { http } from 'msw';

import { TodoServerData } from '@/types/todo';

export const mockTodoList: TodoServerData[] = [
  {
    id: 13,
    todo: 'test todo 1',
    isCompleted: false,
  },
  {
    id: 14,
    todo: 'test todo 2',
    isCompleted: false,
  },
  {
    id: 15,
    todo: 'test todo 3',
    isCompleted: false,
  },
  {
    id: 16,
    todo: 'test todo 4',
    isCompleted: false,
  },
];

export const BASE_URL = 'http://localhost:8000';

export const handlers = [
  http.get(`${BASE_URL}/todo/all`, () => {
    return Response.json('hi');
  }),
];
