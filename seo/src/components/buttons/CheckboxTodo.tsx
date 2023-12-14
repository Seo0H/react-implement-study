import { updateTodoApi } from '@/api/client';
import { useTodoContext } from '@/app/context';

const CheckboxTodo = ({
  todo,
  isCompleted,
  id,
}: {
  todo: string;
  isCompleted: boolean;
  id: number;
}) => {
  const { todoList, setTodoList } = useTodoContext();

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

  return (
    <input
      type='checkbox'
      checked={isCompleted}
      value={todo}
      onChange={() => handleCheckedTodo(id)}
    />
  );
};

export default CheckboxTodo;
