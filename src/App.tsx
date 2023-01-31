import { AppProviders } from './providers/AppProviders';
import { Head } from './components';

import { AppRoutes } from '@/routes';

function App() {
  return (
    <AppProviders>
      <div>
        <Head />
        <AppRoutes />
      </div>
    </AppProviders>
  );
}

export default App;
