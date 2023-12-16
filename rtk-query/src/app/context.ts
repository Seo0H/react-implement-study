import { createContext, useContext, type SetStateAction } from 'react';

import type { TodoClientData } from '@/types/todo';

export type TodoContextState = {
  todoList: TodoClientData[];
  setTodoList: React.Dispatch<SetStateAction<TodoClientData[]>>;
};

const TodoContext = createContext<TodoContextState | null>(null);

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (context === null) {
    throw new Error('useTodoContext는 Todo Context 내부에서 사용해야해요.');
  }

  return context;
};

export default TodoContext;
