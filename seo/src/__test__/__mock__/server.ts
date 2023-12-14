import { setupServer } from 'msw/node';

import { handlers } from '@/__test__/__mock__/handlers';

const server = setupServer(...handlers);

export default server;
