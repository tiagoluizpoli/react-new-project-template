import { MainLayout } from '@/components';
import { AppRedirectionHandler } from '@/features/misc';
import { lazyImport } from '@/utils';

import { Box, Typography } from '@mui/material';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const { FeatureRoutes } = lazyImport(() => import('@/features/feature-template'), 'FeatureRoutes');

const NotFound = () => {
  return <Box>Not Found</Box>;
};

const App = () => {
  return (
    <MainLayout>
      <Suspense fallback={<Typography>Loading</Typography>}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};
export const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    children: [{ path: '/app/feature/*', element: <FeatureRoutes /> }],
  },
  { path: '', element: <AppRedirectionHandler redirectTo="/app" /> },
  { path: '/*', element: <NotFound /> },
];
