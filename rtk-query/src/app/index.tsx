import { useEffect, useState } from 'react';

import { todoApi } from '@/api/client';
import TodoContext, { TodoContextState } from '@/app/context';
import TodoHeader from '@/components/TodoHeader';
import TodoList from '@/components/TodoList';
import { TodoClientData } from '@/types/todo';

function Todo() {
  const [todoList, setTodoList] = useState<TodoClientData[]>([]);

  useEffect(() => {
    todoApi
      .getTodoApi()
      .then((res) => setTodoList(res))
      .catch((e) => console.log(e));
  }, []);

  const initialTodoContext: TodoContextState = {
    todoList,
    setTodoList,
  };

  return (
    <main>
      <h1>to do list</h1>
      <TodoContext.Provider value={initialTodoContext}>
        <TodoHeader />
        <TodoList />
      </TodoContext.Provider>
    </main>
  );
}

export default Todo;
