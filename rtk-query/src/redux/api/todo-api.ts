import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TodoClientData, TodoServerData } from '@/types/todo';
import { makeTodoClientDataList } from '@/utils/data';

const todoApiSlice = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/todo' }),
  tagTypes: ['Todos'],
  endpoints: (build) => ({
    getTodoList: build.query<TodoClientData[], void>({
      query: () => ({ url: '/all', method: 'GET' }),
      transformResponse: (response: [TodoServerData[], todoListLength: number]) =>
        makeTodoClientDataList(response[0]),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Todos', id } as const)),
              { type: 'Todos', id: 'LIST' },
            ]
          : [{ type: 'Todos', id: 'LIST' }],
    }),
    createTodo: build.mutation<void, Pick<TodoServerData, 'todo'>>({
      query: (req) => ({
        url: ``,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: req,
      }),
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),

    updateTodo: build.mutation<
      TodoServerData,
      Pick<TodoServerData, 'id'> & Partial<TodoServerData>
    >({
      query: ({ id, ...puts }) => ({
        url: `/${id}`,
        method: 'PUT',
        body: puts,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Todos', id: arg.id }],
    }),

    deleteTodo: build.mutation<void, Pick<TodoServerData, 'id'>>({
      query: ({ id }) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Todos', id: arg.id }],
    }),

    deleteAllTodo: build.mutation<void, void>({
      query: () => ({
        url: `/all`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Todos' }],
    }),
  }),
});

export const {
  useCreateTodoMutation,
  useGetTodoListQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
  useDeleteAllTodoMutation,
} = todoApiSlice;

export default todoApiSlice;
