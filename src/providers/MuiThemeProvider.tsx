import { muiTheme } from '@/lib';

import { ThemeProvider } from '@mui/material';

export const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
};
