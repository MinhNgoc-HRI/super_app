import {
  createBox,
  createText,
  createTheme,
  useTheme as useThemeRS,
} from '@shopify/restyle';

import type {ColorSchemeName} from './ColorSchemeContext';

const palette = {
  black: '#040303',
  white: '#F5F5F5',
  lightGray: 'rgba(0, 0, 0, 0.04)',
  darkGray: '#3B3B3B',
  lightPrimary: '#FF6E00',
  // dartPrimary: '#994c00',
  dartPrimary: '#FF6E00',
  lightSecondary: '#FFF0E6',
  dartSecondary: '#FFD9B3',
};

export const theme = createTheme({
  colorScheme: 'light' as ColorSchemeName,
  colors: {
    mainBackground: palette.white,
    mainForeground: palette.black,
    secondaryBackground: palette.lightGray,
    primary: palette.lightPrimary,
    secondary: palette.lightSecondary,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
});

export const darkTheme: Theme = {
  ...theme,
  colorScheme: 'dark',
  colors: {
    ...theme.colors,
    mainBackground: palette.black,
    mainForeground: palette.white,
    secondaryBackground: palette.darkGray,
    primary: palette.dartPrimary,
    secondary: palette.dartSecondary,
  },
};

export type Theme = typeof theme;

export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = useThemeRS<Theme>;
