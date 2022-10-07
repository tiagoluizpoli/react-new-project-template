import { BreadcrumbType, useBreadcrombs } from '@/stores/useBreadcrumbs';

import HomeIcon from '@mui/icons-material/Home';
import { Box, Chip, emphasize, styled } from '@mui/material';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Breadcrumbs = () => {
  const { breadcrumbs, clearBreadcrumbs } = useBreadcrombs();
  const { usePrevious } = Helpers;
  const location = useLocation();
  const prevLocation: any = usePrevious(location);

  //By default the breadcrumbs must be automatically removed just after the location path changes.
  useEffect(() => {
    const locationPathHasChanged = () => prevLocation?.pathname !== location?.pathname;
    if (locationPathHasChanged()) {
      clearBreadcrumbs();
    }
  }, [location, prevLocation, clearBreadcrumbs]);
  const styles = {
    allBreadcrumbs: {
      '& *': {
        textDecoration: 'none',
      },
    },
    icons: {
      fontSize: '16px',
    },
  };
  return (
    <Box role="presentation">
      <MuiBreadcrumbs
        aria-label="breadcrumb"
        sx={styles.allBreadcrumbs}
      >
        <Link to="/app">
          <StyledBreadcrumb
            label="Home"
            icon={<HomeIcon sx={styles.icons} />}
          />
        </Link>
        {breadcrumbs.map((breadcrumb: BreadcrumbType) => (
          <Link
            to={breadcrumb.to}
            key={breadcrumb.label}
          >
            <StyledBreadcrumb label={breadcrumb.label} />
          </Link>
        ))}
      </MuiBreadcrumbs>
    </Box>
  );
};

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800];
  return {
    backgroundColor,
    'height': theme.spacing(3),
    'color': 'dimgray',
    'fontSize': '11px',
    'cursor': 'pointer',
    'fontWeight': theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip;

const Helpers = {
  usePrevious: (value: any) => {
    const ref = React.useRef();
    React.useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  },
};
