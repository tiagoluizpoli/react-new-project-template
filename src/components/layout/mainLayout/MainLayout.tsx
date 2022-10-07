import { DesktopMainLayout } from './layouts';
import { MobileMainLayout } from './layouts/MobileMainLayout';

import { useMediaQuery, useTheme } from '@mui/material';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery(useTheme().breakpoints.down('md'));
  return isMobile ? (
    <MobileMainLayout>{children}</MobileMainLayout>
  ) : (
    <DesktopMainLayout>{children}</DesktopMainLayout>
  );
};
