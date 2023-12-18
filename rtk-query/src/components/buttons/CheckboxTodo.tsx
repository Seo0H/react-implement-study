import { memo } from 'react';

import { useUpdateTodoMutation } from '@/redux/api/todo-api';
import { TodoClientData } from '@/types/todo';

const CheckboxTodo = (todoData: TodoClientData) => {
  const [updateTodo] = useUpdateTodoMutation();
  const { isCompleted, todo } = todoData;

  return (
    <input
      type='checkbox'
      checked={isCompleted}
      value={todo}
      onChange={() => updateTodo({ ...todoData, isCompleted: !isCompleted })}
    />
  );
};

export default memo(CheckboxTodo);
