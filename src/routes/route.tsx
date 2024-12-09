import { createBrowserRouter } from 'react-router-dom';

import { App } from '@/App';
import { Landing } from '@/pages/Landing';
import { Link } from '@/pages/Link';
import { MapView } from '@/pages/MapView';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'map', element: <MapView /> },
      { path: 'link', element: <Link /> },
    ],
  },
]);
