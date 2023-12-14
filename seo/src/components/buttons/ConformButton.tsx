import { updateTodoApi } from '@/api/client';
import { useTodoContext } from '@/app/context';
import { checkEmptyString } from '@/utils/checkData';

const ConformButton = ({
  idx,
  inputRef,
}: {
  idx: number;
  inputRef: React.MutableRefObject<HTMLInputElement[]>;
}) => {
  const { todoList, setTodoList } = useTodoContext();

  const handelModifyCommit = (todoIdx: number) => {
    if (!inputRef.current[todoIdx]) return;

    const targetTodoInput = inputRef.current[todoIdx];
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

  return <button onClick={() => handelModifyCommit(idx)}>확인</button>;
};

export default ConformButton;
