import {BLUE, PINK, DARK, LIGHT, BASIC } from './themes/';
import THEMES from "./components/theme";

export const getTheme = themeName => {
  switch (themeName) {
    case THEMES.DARK: return DARK;
    case THEMES.LIGHT: return LIGHT;
    case THEMES.PINK: return PINK;
    case THEMES.BLUE: return BLUE;
    default: return BASIC
  }

};