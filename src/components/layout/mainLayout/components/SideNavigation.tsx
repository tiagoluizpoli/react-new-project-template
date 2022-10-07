import { applicationInfo } from '@/constants';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import {
  Box,
  createTheme,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const SideNavigation = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (openState: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setOpen(openState);
  };
  return (
    <Box>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={'left'}
        open={open}
        onClose={toggleDrawer(false)}
      >
        <DrawerOptions toggleDrawer={toggleDrawer} />
      </Drawer>
    </Box>
  );
};

type DrawerOptionsProps = {
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
};

const DrawerOptions = ({ toggleDrawer }: DrawerOptionsProps) => {
  const options = [{ name: 'clientes', icon: <SupervisedUserCircleIcon />, to: '/app/customers' }];
  const styles = {
    mainBox: { minWidth: { xs: '100vw', sm: '345px' } },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      p: '0.75rem',
      backgroundColor: 'primary.main',
    },
    drawerHeaderTypography: {
      fontSize: '32px',
      fontWeight: '600',
      color: 'alternativeColors.white',
    },
    drawerIcon: { color: 'alternativeColors.white' },
    divider: { borderColor: 'primary.main', borderWidth: '1.3px', backgroundColor: 'primary.main' },
    drawerList: {
      '& .navLink': {
        textDecoration: 'none',
      },
    },
    drawerOptions: {
      p: '0.5rem .6rem',
      color: 'primary.main',
    },
    optionIcon: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
    optionTypography: {
      fontWeight: 500,
      fontSize: '20px',
      letterSpacing: '0.24px',
      opacity: 1,
    },
  };
  const isExtraSmallScreen = useMediaQuery(createTheme().breakpoints.down('sm'));
  return (
    <Box sx={styles.mainBox}>
      <Box sx={styles.drawerHeader}>
        <Typography
          variant="h1"
          sx={styles.drawerHeaderTypography}
        >
          {applicationInfo.applicationName}
        </Typography>
        <IconButton onClick={toggleDrawer(false)}>
          {isExtraSmallScreen ? (
            <CloseIcon sx={styles.drawerIcon} />
          ) : (
            <ChevronLeftIcon sx={styles.drawerIcon} />
          )}
        </IconButton>
      </Box>
      <Divider sx={styles.divider} />
      <List
        sx={styles.drawerList}
        disablePadding
      >
        {options.map((option, index) => {
          return (
            <Box key={index}>
              <NavLink
                to={option.to}
                className="navLink"
                onClick={toggleDrawer(false)}
              >
                <ListItem>
                  <ListItemButton>
                    <Box sx={styles.drawerOptions}>
                      <Stack
                        direction="row"
                        alignItems={'center'}
                        spacing={2}
                      >
                        <Box sx={styles.optionIcon}>{option.icon}</Box>
                        <Typography sx={styles.optionTypography}>{option.name}</Typography>
                      </Stack>
                    </Box>
                  </ListItemButton>
                </ListItem>
              </NavLink>
            </Box>
          );
        })}
      </List>
    </Box>
  );
};
