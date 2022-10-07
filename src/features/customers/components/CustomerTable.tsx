// Mocks
import { columns, rows } from '../utils/mocks';

import { MuiCustomTable } from '@/components/common';

import { Stack } from '@mui/material';

export const CustomerTable = () => {
  return (
    <Stack>
      <MuiCustomTable
        columns={columns}
        rows={rows}
      />
    </Stack>
  );
};
