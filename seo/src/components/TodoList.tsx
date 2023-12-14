import { useRef } from 'react';

import { useTodoContext } from '@/app/context';
import {
  ChangeModifyModeButton,
  CheckboxTodo,
  ConformButton,
  DeleteTodoButton,
  ModifyCancelButton,
} from '@/components/buttons';

const TodoList = () => {
  const todoTextInputRef = useRef<HTMLInputElement[]>([]);
  const { todoList } = useTodoContext();

  return (
    <>
      {todoList.map(({ id, isCompleted, todo, isModifying }, idx) => (
        <li key={id}>
          <CheckboxTodo {...{ todo, isCompleted, id }} />
          <input
            ref={(el: HTMLInputElement) => (todoTextInputRef.current[idx] = el)}
            defaultValue={todo}
            disabled={!isModifying}
          />

          {isModifying ? (
            <>
              <ConformButton idx={idx} inputRef={todoTextInputRef} />
              <ModifyCancelButton idx={idx} inputRef={todoTextInputRef} />
            </>
          ) : (
            <>
              <ChangeModifyModeButton idx={idx} />
              <DeleteTodoButton id={id} />
            </>
          )}
        </li>
      ))}
    </>
  );
};

export default TodoList;
