import { createBrowserRouter } from 'react-router-dom';

import { App } from '@/App';
import { Link } from '@/pages/Link';
import { MapView } from '@/pages/MapView';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'map', element: <MapView /> },
      { path: 'link', element: <Link /> },
    ],
  },
]);
