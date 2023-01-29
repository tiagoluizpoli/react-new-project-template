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

// ###=> A Home simulation.
// #TODO=> Delete this when this project start to be implemented
const BaseEntryElement = () => {
  return <div>Entry</div>;
};
export const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    children: [
      { path: '/app/', element: <BaseEntryElement /> },
      { path: '/app/feature/*', element: <FeatureRoutes /> },
    ],
  },
  { path: '', element: <AppRedirectionHandler redirectTo="/app" /> },
  { path: '/*', element: <NotFound /> },
];
