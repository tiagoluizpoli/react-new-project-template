import { Breadcrumbs, Header } from '../components';

import { Box } from '@mui/material';
import React from 'react';

export const DesktopMainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', heigh: '100vh' }}>
      <Header />
      <Nav />
      <MainSection>{children}</MainSection>
      {/* {children} */}
    </Box>
  );
};

const Nav = () => {
  const styles = {
    mainRow: {
      display: 'flex',
      justifyContent: 'center',
      flexGrow: 1,
      backgroundImage: `linear-gradient(to bottom, 2rem 166px, white 0%)`,
    },
    mainBox: {
      maxWidth: 'xl',
      flexGrow: 1,
      display: 'flex',
      padding: '1rem 1.5rem 1rem',
      flexDirection: 'column',
    },
  };
  return (
    <Box sx={styles.mainRow}>
      <Box sx={styles.mainBox}>
        <Breadcrumbs />
      </Box>
    </Box>
  );
};

const MainSection = ({ children }: { children: React.ReactNode }) => {
  const styles = {
    mainRow: {
      display: 'flex',
      justifyContent: 'center',
      flexGrow: 1,
      backgroundImage: `linear-gradient(to bottom, 2rem 166px, white 0%)`,
    },
    mainBox: {
      maxWidth: 'xl',
      flexGrow: 1,
      display: 'flex',
      padding: '1rem 1.5rem 3.5rem',
      flexDirection: 'column',
    },
  };
  return (
    <Box sx={styles.mainRow}>
      <Box sx={styles.mainBox}>{children}</Box>
    </Box>
  );
};
