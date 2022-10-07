import { useRoutes } from 'react-router-dom';
import { protectedRoutes } from './protectedRoutes';

export const AppRoutes = () => {
  const routes = protectedRoutes;

  const element = useRoutes(routes);

  return <>{element}</>;
};
