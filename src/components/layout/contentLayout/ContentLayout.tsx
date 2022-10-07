import { Head } from '@/components/Metadata';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
  customPadding?: any;
  customBoxShadow?: string;
  removeGobackButton?: boolean;
};

export const ContentLayout = ({
  children,
  title,
  customPadding = '',
  customBoxShadow = '',
  removeGobackButton = false,
}: ContentLayoutProps) => {
  const navigate = useNavigate();

  const defaultPadding = { xs: '1rem', md: '2rem' };
  const defaultBoxShadow = '0px 3px 3px #00000029';
  const styles = {
    headerBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    gobackButton: {
      display: { xs: 'none', md: 'flex' },
      textTransform: 'none',
      fontSize: '12.8px',
      letterSpacing: 0,
      color: 'alternativeColors.customBlue1',
      borderRadius: '20px',
      whiteSpace: 'nowrap',
      boxShadow: '0px 3px 6px #0000000A',
      backgroundColor: 'white',
      p: '0.5rem 1.5rem 0.5rem 1.25rem',
      fontWeight: 600,
    },
    gobackButtonIcon: {
      height: '12.8px',
      width: '12.8px',
      mr: '0.25rem',
    },
    childrenBox: {
      borderRadius: '12px',
      backgroundColor: 'white',
      p: customPadding ? customPadding : defaultPadding,
      boxShadow: customBoxShadow ? customBoxShadow : defaultBoxShadow,
    },
  };

  return (
    <>
      <Head title={title} />
      <Stack spacing={{ xs: 4, md: 5 }}>
        <Box sx={styles.headerBox}>
          <Typography
            variant="h1"
            sx={{ color: 'primary.main' }}
          >
            {title}
          </Typography>
          {!removeGobackButton && (
            <Button
              sx={styles.gobackButton}
              variant="text"
              onClick={() => navigate(-1)}
            >
              <ArrowBackIosIcon sx={styles.gobackButtonIcon} />
              Voltar
            </Button>
          )}
        </Box>
        <Box sx={styles.childrenBox}>{children}</Box>
      </Stack>
    </>
  );
};
