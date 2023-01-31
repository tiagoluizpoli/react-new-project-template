import { MainLayout } from '@/components';
import { AppRedirectionHandler } from '@/features/misc';
import { lazyImport } from '@/utils';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const { FeatureRoutes } = lazyImport(() => import('@/features/feature-template'), 'FeatureRoutes');

const NotFound = () => {
  return <div>Not Found</div>;
};

const App = () => {
  return (
    <MainLayout>
      <Suspense fallback={<h1>Loading</h1>}>
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
