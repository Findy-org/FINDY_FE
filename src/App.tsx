import { Outlet } from 'react-router-dom';

import { Layout } from './components/common/Layout';
import { MarkerProvider } from './contexts/MarkerContext';

export const App = () => {
  return (
    <Layout>
      <MarkerProvider>
        <Outlet />
      </MarkerProvider>
    </Layout>
  );
};
