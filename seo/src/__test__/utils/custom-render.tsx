import { render } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { routesMockConfig } from '@/__test__/__mock__/router';

export function renderWithRouter({ route }: { route: string }) {
  const router = createMemoryRouter(routesMockConfig, {
    initialEntries: [route],
    initialIndex: 1,
  });

  return render(<RouterProvider router={router} />);
}
