import { store } from '@/app/store';
import todoApiSlice from '@/redux/api/todo-api';

export async function todoLoader() {
  const q = store.dispatch(todoApiSlice.endpoints.getTodoList.initiate());

  try {
    const response = await q.unwrap();
    return response;
  } catch (e) {
    console.log(e);
    throw new Error('todo loader 내부에서 데이터를 fetching 하는 중 문제가 발생했습니다.');
  } finally {
    q.unsubscribe();
  }
}
