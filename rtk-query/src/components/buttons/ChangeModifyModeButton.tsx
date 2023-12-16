import { useTodoContext } from '@/app/context';

const ChangeModifyModeButton = ({ idx }: { idx: number }) => {
  const { todoList, setTodoList } = useTodoContext();

  const handleChangeModifyMode = (todoIdx: number) => {
    const modifiedTodo = todoList.map((todo, idx) => {
      if (idx === todoIdx) todo.isModifying = !todo.isModifying;
      return todo;
    });

    setTodoList(modifiedTodo);
  };

  return <button onClick={() => handleChangeModifyMode(idx)}>수정</button>;
};

export default ChangeModifyModeButton;
