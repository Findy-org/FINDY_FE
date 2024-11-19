import { Outlet } from 'react-router-dom';

import { Layout } from './components/common/Layout';
import { MapDataProvider } from './contexts/MapContext';
import { MarkerProvider } from './contexts/MarkerContext';
import { useAuth } from './hooks/auth/useAuth';

export const App = () => {
  useAuth();
  return (
    <MapDataProvider>
      <MarkerProvider>
        <Layout>
          <Outlet />
        </Layout>
      </MarkerProvider>
    </MapDataProvider>
  );
};
