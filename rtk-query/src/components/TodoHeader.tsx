import { useRef } from 'react';

import { useCreateTodoMutation, useDeleteAllTodoMutation } from '@/redux/api/todo-api';
import { checkEmptyString } from '@/utils/checkData';

const TodoHeader = () => {
  const addTodoInputRef = useRef<HTMLInputElement>(null);
  const [createTodo] = useCreateTodoMutation();
  const [deleteAllTodo] = useDeleteAllTodoMutation();

  const handleDeleteAll = () => deleteAllTodo();

  const handleAddTodo = () => {
    if (addTodoInputRef.current === null) return;
    const addTodoData = addTodoInputRef.current.value;

    if (checkEmptyString(addTodoData)) {
      addTodoInputRef.current.value = '';
      throw new Error('빈칸은 허용되지 않아요.');
    }
    createTodo({ todo: addTodoData.trim() }).then(() => {
      if (addTodoInputRef.current === null) return;
      addTodoInputRef.current.value = '';
    });
  };

  return (
    <div>
      <input type='text' ref={addTodoInputRef} />
      <button onClick={handleAddTodo}>추가</button>
      <button onClick={handleDeleteAll}>전체 삭제</button>
    </div>
  );
};

export default TodoHeader;
