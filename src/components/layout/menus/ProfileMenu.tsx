import { AccountCircle } from '@mui/icons-material';
import {
  Box,
  createTheme,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React from 'react';

export const ProfileMenu = () => {
  const isSmallDevice = useMediaQuery(createTheme().breakpoints.down('md'));
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuItems = [
    {
      icon: '',
      redirectTo: '',
      description: 'Profile',
    },
    {
      icon: '',
      redirectTo: '',
      description: 'My account',
    },
  ];

  return (
    <Box>
      <Stack
        direction={'row'}
        spacing={1}
        alignItems="center"
      >
        {!isSmallDevice && <Typography>authenticateduser@something.com</Typography>}

        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle sx={{ width: '40px', height: '40px' }} />
        </IconButton>
      </Stack>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems.map((menuItem, index) => {
          return (
            <MenuItem
              key={index}
              onClick={handleClose}
            >
              {menuItem.description}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export const handleMenu = () => {};
