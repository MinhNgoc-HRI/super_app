import {
  createBox,
  createText,
  createTheme,
  useTheme as useThemeRS,
} from '@shopify/restyle';

import type {ColorSchemeName} from './ColorSchemeContext';

const palette = {
  /**
   * root color
   */
  dark_bg: '#0F0F0F',
  light_bg: '#FFFFFF',
  dark_2_bg: '#272727',
  light_2_bg: '#F2F2F2',
  dark_2_bg_hover: '#3F3F3F',
  light_2_bg_hover: '#E5E5E5',
  dark_text: '#F1F1F1',
  light_text: '#0F0F0F',
  dark_subtext: '#AAAAAA',
  light_subtext: '#606060',
  dark_red: '#C91908',
  light_red: '#D22C25',
  dark_blue: '#3EA6FF',
  light_blue: '#055FD4',
};

export const theme = createTheme({
  colorScheme: 'light' as ColorSchemeName,
  colors: {
    main_bg: palette.light_bg,
    main_2_bg: palette.light_2_bg,
    main_2_bg_hover: palette.light_2_bg_hover,
    text: palette.light_text,
    sub_text: palette.light_subtext,
    red: palette.light_red,
    blue: palette.light_blue,
    primary: '#FF6E00',
    sub_primary: '#FFF0E6',
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
    main_bg: palette.dark_bg,
    main_2_bg: palette.dark_2_bg,
    main_2_bg_hover: palette.dark_2_bg_hover,
    text: palette.dark_text,
    sub_text: palette.dark_subtext,
    red: palette.dark_red,
    blue: palette.dark_blue,
    primary: '#FF6E00',
    sub_primary: '#FFF0E6',
  },
};

export type Theme = typeof theme;

export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = useThemeRS<Theme>;
