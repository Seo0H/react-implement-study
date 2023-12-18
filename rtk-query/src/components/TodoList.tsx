/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from 'react';

import {
  ChangeModifyModeButton,
  CheckboxTodo,
  DeleteTodoButton,
  ModifyCancelButton,
} from '@/components/buttons';
import { useGetTodoListQuery, useUpdateTodoMutation } from '@/redux/api/todo-api';
import { TodoClientData } from '@/types/todo';
import { checkEmptyString } from '@/utils/checkData';

const TodoList = () => {
  const todoTextInputRef = useRef<HTMLInputElement[]>([]);
  const { data: todoList, isLoading, isUninitialized } = useGetTodoListQuery();
  const [isModifying, setIsModifying] = useState<boolean[]>([]);
  const [updateTodo] = useUpdateTodoMutation();

  if (isLoading || isUninitialized) {
    return <div>is loading</div>;
  }

  if (!todoList) {
    return <div>Missing todoList</div>;
  }

  const handleUpdateTodo = (todoData: TodoClientData, todoIdx: number) => {
    if (!todoTextInputRef.current[todoIdx]) return;

    const targetTodoInput = todoTextInputRef.current[todoIdx];
    const updateTodoData = targetTodoInput.value.trim();

    if (checkEmptyString(updateTodoData)) {
      targetTodoInput.value = '';
      throw new Error('빈칸은 허용되지 않아요.');
    }
    const { isModifying, ...todoServerData } = todoData;
    updateTodo({ ...todoServerData, todo: targetTodoInput.value });
    setIsModifying((prev) =>
      prev.map((modifyVal, prevIdx) => {
        if (prevIdx === todoIdx) {
          return !modifyVal;
        }
        return modifyVal;
      })
    );
  };

  const handleOnModify = (todoIdx: number) => {
    if (!isModifying.length) {
      setIsModifying(() => Array.from({ length: todoList?.length || 0 }, () => false));
    }

    setIsModifying((prev) =>
      prev.map((modifyVal, prevIdx) => {
        if (prevIdx === todoIdx) {
          return !modifyVal;
        }
        return modifyVal;
      })
    );

    todoTextInputRef.current[todoIdx].value = todoList[todoIdx].todo;
  };

  return (
    <>
      {todoList.map((todoData, idx) => {
        const { todo, id } = todoData;

        return (
          <li key={id}>
            <CheckboxTodo {...todoData} />
            <input
              ref={(el: HTMLInputElement) => (todoTextInputRef.current[idx] = el)}
              defaultValue={todo}
              disabled={!isModifying[idx]}
            />

            {isModifying[idx] ? (
              <>
                <button onClick={() => handleUpdateTodo(todoData, idx)}>확인</button>
                <ModifyCancelButton onChange={() => handleOnModify(idx)} />
              </>
            ) : (
              <>
                <ChangeModifyModeButton onChange={() => handleOnModify(idx)} />
                <DeleteTodoButton {...todoData} />
              </>
            )}
          </li>
        );
      })}
    </>
  );
};

export default TodoList;
