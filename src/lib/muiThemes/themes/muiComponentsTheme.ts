import { createTheme } from '@mui/material';

export const muiComponents = createTheme({
  components: {
    MuiSelect: {
      defaultProps: {
        sx: {
          borderRadius: '10px',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        sx: {
          '& div': {
            borderRadius: '10px',
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        sx: { borderRadius: '10px' },
      },
    },
  },
});
