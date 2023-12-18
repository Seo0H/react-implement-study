import { TodoClientData, TodoServerData } from '@/types/todo';

export const makeTodoClientDataList = (todoServerData: TodoServerData[]) => {
  const todoClientData: TodoClientData[] = todoServerData.map((todo) => ({
    ...todo,
    isModifying: false,
  }));
  return todoClientData;
};
