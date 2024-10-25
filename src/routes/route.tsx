import { createBrowserRouter } from 'react-router-dom';

import { App } from '@/App';
import { Map } from '@/pages/Map';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ path: 'map', element: <Map /> }],
  },
]);
