import { Header } from '../components';

import { commonChildrenProps } from '@/types';

import { Box } from '@mui/material';
import React from 'react';

export const MobileMainLayout = ({ children }: commonChildrenProps) => {
  return (
    <Box>
      <Header />
      <MainSection>{children}</MainSection>
    </Box>
  );
};

export const MainSection = ({ children }: commonChildrenProps) => {
  return (
    <Box
      sx={{ padding: '2rem 1.5rem 2rem', display: 'flex', flexGrow: '1', flexDirection: 'column' }}
    >
      {children}
    </Box>
  );
};
