import { ContentLayout } from '@/components';
import { addBreadcrumbs } from '@/stores/useBreadcrumbs';

import { Typography } from '@mui/material';
import { useEffect } from 'react';

export const Feature = () => {
  useEffect(() => {
    addBreadcrumbs([
      { label: 'Feature', to: '/app/feature' },
      { label: 'New Feature', to: '/app/feature/newfeature' },
    ]);
  }, []);
  return (
    <ContentLayout title="Feature">
      <Typography>Content</Typography>
    </ContentLayout>
  );
};
