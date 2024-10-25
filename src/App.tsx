import { Outlet } from 'react-router-dom';

import { Layout } from './components/common/Layout';

export const App = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
