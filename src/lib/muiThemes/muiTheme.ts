import { muiComponents } from './themes/muiComponentsTheme';
import { muiPalette } from './themes/muiPaletteTheme';
import { muiTypography } from './themes/muiTypographyTheme';

import React from 'react';
import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    alternativeColors: {
      black: string;
      white: string;
      defaultBackgroundColor: string;
    };
  }
  interface Typography {
    blockQuotes: React.CSSProperties;
    capitalized: React.CSSProperties;
    small: React.CSSProperties;
    tiny: React.CSSProperties;
  }
  interface TypographyOptions {
    blockQuotes: React.CSSProperties;
    capitalized: React.CSSProperties;
    small: React.CSSProperties;
    tiny: React.CSSProperties;
  }

  interface TypographyVariants {
    blockQuotes: React.CSSProperties;
    capitalized: React.CSSProperties;
    small: React.CSSProperties;
    tiny: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    blockQuotes: React.CSSProperties;
    capitalized: React.CSSProperties;
    small: React.CSSProperties;
    tiny: React.CSSProperties;
  }
  interface TypographyPropsVariantOverrides {
    blockQuotes: true;
    capitalized: true;
    small: true;
    tiny: true;
  }
}

export const muiTheme = createTheme({
  palette: muiPalette,
  typography: {
    ...muiTypography,
    capitalized: { ...muiTypography.capitalized, textTransform: 'uppercase' },
  },
  components: muiComponents.components,
});
