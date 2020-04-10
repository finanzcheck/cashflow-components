import { DEFAULT_THEME } from "./themes/defaultTheme";

export type Theme = typeof DEFAULT_THEME;

export interface ThemeProps {
  theme: Theme;
}
