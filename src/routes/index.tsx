import { protectedRoutes } from './protectedRoutes';

import { useRoutes } from 'react-router-dom';

export const AppRoutes = () => {
  const routes = protectedRoutes;

  const element = useRoutes(routes);

  return <>{element}</>;
};
