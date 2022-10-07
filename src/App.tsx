import { AppProviders } from './providers/AppProviders';
import { Head } from './components';

import { AppRoutes } from '@/routes';

import { Box } from '@mui/material';

function App() {
  return (
    <AppProviders>
      <Box sx={{ height: '100vh', backgroundColor: 'alternativeColors.defaultBackgroundColor' }}>
        <Head />
        <AppRoutes />
      </Box>
    </AppProviders>
  );
}

export default App;
