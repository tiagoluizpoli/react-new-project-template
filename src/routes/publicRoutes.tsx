import { Box } from '@mui/material';
import React from 'react';

const AuthRoutes = () => {
  return <Box>auth</Box>;
  //create and import it
};

const AuthRedirectHandler = ({ redirectTo }: { redirectTo: string }) => {
  return <Box>{redirectTo}</Box>;
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
