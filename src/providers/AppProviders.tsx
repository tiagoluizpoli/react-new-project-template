import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';

const ErrorFallback = () => {
  return (
    <div role="alert">
      <h2>Ooops, algo deu errado :( </h2>
      <button onClick={() => window.location.assign(window.location.origin)}>Atualizar</button>
    </div>
  );
};
type AppProviderProps = {
  children: React.ReactNode;
};
export const AppProviders = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <Router>{children}</Router>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
