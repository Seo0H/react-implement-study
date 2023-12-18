import TodoHeader from '@/components/TodoHeader';
import TodoList from '@/components/TodoList';

function Todo() {
  return (
    <main>
      <h1>to do list</h1>
      <TodoHeader />
      <TodoList />
    </main>
  );
}

export default Todo;
