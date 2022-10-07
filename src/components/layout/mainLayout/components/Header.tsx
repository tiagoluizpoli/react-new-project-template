import { SideNavigation } from './SideNavigation';

import { applicationInfo } from '@/constants';
import { ProfileMenu } from '@/components';

import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Header = () => {
  // const isExtraSmallScreen = useMediaQuery(createTheme().breakpoints.down('sm'));
  const styles = {
    appBar: {
      paddingY: '0.75rem',
    },
    contentWrapper: { display: 'flex', justifyContent: 'center', width: '100%' },
    toolbar: { width: '100%', maxWidth: 'xl' },
    headerMainContent: {
      'flexGrow': 1,
      '& a': {
        color: 'alternativeColors.white',
        textDecoration: 'none',
      },
    },
  };
  return (
    <AppBar
      position="static"
      elevation={0}
      variant="outlined"
      sx={styles.appBar}
    >
      <Box sx={styles.contentWrapper}>
        <Toolbar sx={styles.toolbar}>
          <SideNavigation />
          <Box sx={styles.headerMainContent}>
            <Link to={'/app'}>
              <Typography variant="h1">{applicationInfo.applicationName}</Typography>
            </Link>
          </Box>
          <ProfileMenu />
        </Toolbar>
      </Box>
    </AppBar>
  );
};
