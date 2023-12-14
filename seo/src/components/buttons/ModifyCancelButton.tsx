import React from 'react';

import { useTodoContext } from '@/app/context';

const ModifyCancelButton = ({
  idx,
  inputRef,
}: {
  idx: number;
  inputRef: React.MutableRefObject<HTMLInputElement[]>;
}) => {
  const { todoList, setTodoList } = useTodoContext();

  const handleModifyCancel = (todoIdx: number) => {
    const targetTodoInput = inputRef.current[todoIdx];
    targetTodoInput.value = todoList[todoIdx].todo;

    const updatedTodoList = todoList.map((todoData, idx) => {
      if (idx === todoIdx) {
        todoData.isModifying = false;
      }
      return todoData;
    });

    setTodoList(updatedTodoList);
  };

  return <button onClick={() => handleModifyCancel(idx)}>취소</button>;
};

export default ModifyCancelButton;
