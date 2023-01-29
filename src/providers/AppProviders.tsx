import { Box, Button, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';

const ErrorFallback = () => {
  return (
    <Box role="alert">
      <Typography variant="h2">Ooops, algo deu errado :( </Typography>
      <Button onClick={() => window.location.assign(window.location.origin)}>Atualizar</Button>
    </Box>
  );
};
type AppProviderProps = {
  children: React.ReactNode;
};
export const AppProviders = ({ children }: AppProviderProps) => {
  return (
    <CssBaseline>
      <React.Suspense>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <HelmetProvider>
            <Router>{children}</Router>
          </HelmetProvider>
        </ErrorBoundary>
      </React.Suspense>
    </CssBaseline>
  );
};
