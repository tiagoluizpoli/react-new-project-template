
import React from 'react';

const AuthRoutes = () => {
  return <div>auth</div>;
  //create and import it
};

const AuthRedirectHandler = ({ redirectTo }: { redirectTo: string }) => {
  return <div>{redirectTo}</div>;
  //create and import it
};

export const publicRoutes = [
  {
    path: '/auth/*',
    element: <AuthRoutes />,
  },
  {
    path: '*',
    element: <AuthRedirectHandler redirectTo="/auth/login" />,
  },
];
