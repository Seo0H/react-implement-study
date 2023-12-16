import { useRef } from 'react';

import { todoApi } from '@/api/client';
import { useTodoContext } from '@/app/context';
import { checkEmptyString } from '@/utils/checkData';

const TodoHeader = () => {
  const addTodoInputRef = useRef<HTMLInputElement>(null);
  const { setTodoList } = useTodoContext();

  const handleDeleteAll = () => todoApi.deleteAllTodoApi().then(() => setTodoList([]));

  const handleAddTodo = () => {
    if (addTodoInputRef.current === null) return;
    const addTodoData = addTodoInputRef.current.value;

    if (checkEmptyString(addTodoData)) {
      addTodoInputRef.current.value = '';
      throw new Error('빈칸은 허용되지 않아요.');
    }

    todoApi
      .createTodoApi(addTodoData.trim())
      .then((resTodo) => {
        if (addTodoInputRef.current !== null) addTodoInputRef.current.value = '';
        setTodoList((prev) => [...prev, resTodo]);
      })
      .catch((e) => console.log(e));
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
