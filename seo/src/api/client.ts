import { TodoClientData, TodoServerData } from '@/types/todo';

export const getTodoApi = async () => {
  try {
    const data = await fetch('http://localhost:8000/todo/all', {
      method: 'GET',
    });

    const [todoList]: [TodoServerData[], number] = await data.json();

    const todoClientList: TodoClientData[] = todoList.map((todo) => ({
      ...todo,
      isModifying: false,
    }));

    return todoClientList;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const createTodoApi = async (todo: string) => {
  try {
    const data = await fetch('http://localhost:8000/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ todo }),
    });

    const todoData: TodoClientData = { ...(await data.json()), isModifying: false };

    return todoData;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const updateTodoApi = async (TodoServerData: TodoServerData) => {
  const { id, todo, isCompleted } = TodoServerData;
  try {
    const data = await fetch(`http://localhost:8000/todo/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ todo, isCompleted }),
    });

    const todoData: TodoClientData = { ...(await data.json()), isModifying: false };

    return todoData;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodoApi = async (todoId: number) => {
  try {
    await fetch(`http://localhost:8000/todo/${todoId}`, {
      method: 'delete',
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAllTodoApi = async () => {
  try {
    await fetch(`http://localhost:8000/todo/all`, {
      method: 'delete',
    });
  } catch (error) {
    console.log(error);
  }
};
