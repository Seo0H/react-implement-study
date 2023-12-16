import { todoApi } from '@/api/client';
import { useTodoContext } from '@/app/context';

const DeleteTodoButton = ({ id }: { id: number }) => {
  const { setTodoList } = useTodoContext();

  const handleDeleteTodo = (todoId: number) => {
    todoApi
      .deleteTodoApi(todoId)
      .then(() =>
        setTodoList((prev) => prev.filter((TodoServerData) => TodoServerData.id !== todoId))
      )
      .catch((e) => console.log(e));
  };
  return <button onClick={() => handleDeleteTodo(id)}>삭제</button>;
};

export default DeleteTodoButton;
