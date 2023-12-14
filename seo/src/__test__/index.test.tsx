import { screen, waitFor } from '@testing-library/react';

import { BASE_URL } from '@/__test__/__mock__/handlers';
import { renderWithRouter } from '@/__test__/utils/custom-render';

import '@testing-library/jest-dom';

describe('route path 테스트', () => {
  it("'/' 경로 진입 시 `/todo` 경로로 이동해야 한다", async () => {
    renderWithRouter({ route: '/' });

    await waitFor(() => screen.getByText(/to do list/i));
    expect(screen.getByText(/to do list/i)).toBeInTheDocument();
  });

  it('잘못된 경로 진입 시 404 페이지가 떠야 한다', async () => {
    renderWithRouter({ route: '/something-wrong' });

    await waitFor(() => screen.getByTestId('error-page'));
    expect(screen.getByTestId('error-page')).toBeInTheDocument();
  });
});

describe('TODO CRUD TEST', () => {
  it('Get todo api 요청 시 모든 todo 에 대한 요청을 응답한다.', async () => {
    const data = await fetch(`${BASE_URL}/todo/all`);
    const todoList = await data.json();
    expect(todoList[0]).toHaveProperty(`id`);
    // render(<Todo />);
  });
});
