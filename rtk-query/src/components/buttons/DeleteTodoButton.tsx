/* eslint-disable @typescript-eslint/no-unused-vars */
import { memo } from 'react';

import { useDeleteTodoMutation } from '@/redux/api/todo-api';
import { TodoClientData } from '@/types/todo';

const DeleteTodoButton = ({ id }: TodoClientData) => {
  const [deleteTodo] = useDeleteTodoMutation();

  return <button onClick={() => deleteTodo({ id })}>삭제</button>;
};

export default memo(DeleteTodoButton);
