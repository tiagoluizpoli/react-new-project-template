import { Filters } from '../components/Filters';
import { CustomerTable } from '../components/CustomerTable';

import { Stack } from '@mui/material';

export const CustomersLayout = () => {
  return (
    <Stack spacing={4}>
      <Filters />
      <CustomerTable />
    </Stack>
  );
};
