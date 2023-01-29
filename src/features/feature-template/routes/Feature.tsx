import { addBreadcrumbs } from '@/stores/useBreadcrumbs';

import { useEffect } from 'react';

export const Feature = () => {
  useEffect(() => {
    addBreadcrumbs([
      { label: 'Feature', to: '/app/feature' },
      { label: 'New Feature', to: '/app/feature/newfeature' },
    ]);
  }, []);
  return <h1>Content</h1>;
};
