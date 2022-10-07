import { CustomersLayout } from '../layouts/CustomersLayout';

import { ContentLayout } from '@/components';
import { addBreadcrumbs } from '@/stores/useBreadcrumbs';

import { useEffect } from 'react';

export const Customers = () => {
  useEffect(() => {
    addBreadcrumbs([{ label: 'Clientes', to: '/app/customers' }]);
  }, []);
  return (
    <ContentLayout title="Clientes">
      <CustomersLayout />
    </ContentLayout>
  );
};
