import { useEffect, useRef, useState } from 'react';

import { deleteAllTodoApi } from './../api/client';

import { createTodoApi, deleteTodoApi, getTodoApi, updateTodoApi } from '@/api/client';
import { TodoClientData } from '@/types/todo';
import { checkEmptyString } from '@/utils/checkData';

function TodoList() {
  const [todoList, setTodoList] = useState<TodoClientData[]>([]);

  const addTodoInputRef = useRef<HTMLInputElement>(null);
  const todoTextInputRef = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    getTodoApi()
      .then((res) => setTodoList(res))
      .catch((e) => console.log(e));
  }, []);

  const handleAddTodo = () => {
    if (addTodoInputRef.current === null) return;
    const addTodoData = addTodoInputRef.current.value;

    if (checkEmptyString(addTodoData)) {
      addTodoInputRef.current.value = '';
      throw new Error('빈칸은 허용되지 않아요.');
    }

    createTodoApi(addTodoData.trim())
      .then((resTodo) => {
        if (addTodoInputRef.current !== null) addTodoInputRef.current.value = '';
        setTodoList((prev) => [...prev, resTodo]);
      })
      .catch((e) => console.log(e));
  };

  const handleChangeModifyMode = (todoIdx: number) => {
    const modifiedTodo = todoList.map((todo, idx) => {
      if (idx === todoIdx) todo.isModifying = !todo.isModifying;
      return todo;
    });

    setTodoList(modifiedTodo);
  };

  const handleDeleteTodo = (todoId: number) => {
    deleteTodoApi(todoId)
      .then(() =>
        setTodoList((prev) => prev.filter((TodoServerData) => TodoServerData.id !== todoId))
      )
      .catch((e) => console.log(e));
  };

  const handelModifyCommit = (todoIdx: number) => {
    if (!todoTextInputRef.current[todoIdx]) return;

    const targetTodoInput = todoTextInputRef.current[todoIdx];
    const updateTodoData = targetTodoInput.value.trim();

    if (checkEmptyString(updateTodoData)) {
      targetTodoInput.value = '';
      throw new Error('빈칸은 허용되지 않아요.');
    }

    updateTodoApi({ ...todoList[todoIdx], todo: updateTodoData })
      .then(() => {
        const updatedTodoList = todoList.map((todoData, idx) => {
          if (idx === todoIdx) {
            todoData.todo = updateTodoData;
            todoData.isModifying = false;
          }
          return todoData;
        });

        targetTodoInput.value = updateTodoData;
        setTodoList(updatedTodoList);
      })
      .catch((e) => console.log(e));
  };

  const handleModifyCancel = (todoIdx: number) => {
    const targetTodoInput = todoTextInputRef.current[todoIdx];
    targetTodoInput.value = todoList[todoIdx].todo;

    const updatedTodoList = todoList.map((todoData, idx) => {
      if (idx === todoIdx) {
        todoData.isModifying = false;
      }
      return todoData;
    });

    setTodoList(updatedTodoList);
  };

  const handleCheckedTodo = (targetTodoId: number) => {
    const targetTodo = todoList.filter((todoData) => todoData.id === targetTodoId).pop();

    if (targetTodo === undefined) {
      throw new Error('해당 todo의 id가 존재하지 않습니다.');
    }

    const changeState = !targetTodo.isCompleted;
    targetTodo.isCompleted = changeState;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { isModifying, ...serverTodoData } = targetTodo;

    updateTodoApi(serverTodoData)
      .then(() => {
        const updatedTodoList = todoList.map((todoData) => {
          if (todoData.id === targetTodoId) {
            todoData.isCompleted = changeState;
          }
          return todoData;
        });

        setTodoList(updatedTodoList);
      })
      .catch((e) => console.log(e));
  };

  const handleDeleteAll = () => deleteAllTodoApi().then(() => setTodoList([]));

  return (
    <main>
      <h1>to do list</h1>
      <div>
        <input type='text' ref={addTodoInputRef} />
        <button onClick={handleAddTodo}>추가</button>
        <button onClick={handleDeleteAll}>전체 삭제</button>
      </div>

      {todoList.map(({ id, isCompleted, todo, isModifying }, idx) => (
        <li key={id}>
          <input
            type='checkbox'
            checked={isCompleted}
            value={todo}
            onChange={() => handleCheckedTodo(id)}
          />
          <input
            ref={(el: HTMLInputElement) => (todoTextInputRef.current[idx] = el)}
            defaultValue={todo}
            disabled={!isModifying}
          />
          {isModifying ? (
            <>
              <button onClick={() => handelModifyCommit(idx)}>확인</button>
              <button onClick={() => handleModifyCancel(idx)}>취소</button>
            </>
          ) : (
            <>
              <button onClick={() => handleChangeModifyMode(idx)}>수정</button>
              <button onClick={() => handleDeleteTodo(id)}>삭제</button>
            </>
          )}
        </li>
      ))}
    </main>
  );
}

export default TodoList;
