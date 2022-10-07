import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React from 'react';

export type muiTableType = {
  columns: GridColDef[];
  rows: any;
};

export const MuiCustomTable = ({ columns, rows }: muiTableType) => {
  columns.forEach((col) => {
    col['headerClassName'] = 'header-style';
  });
  return (
    <Box
      sx={{
        'height': 400,
        'width': '100%',
        '& .header-style': { color: 'primary.main', fontVariant: 'capitalized' },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        hideFooter
      />
    </Box>
  );
};
