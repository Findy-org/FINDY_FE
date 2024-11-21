import { Outlet } from 'react-router-dom';

import { Layout } from './components/common/Layout';
import { useAuth } from './hooks/auth/useAuth';

export const App = () => {
  useAuth();
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
