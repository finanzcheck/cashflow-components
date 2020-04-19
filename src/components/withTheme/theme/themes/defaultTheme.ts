import { Theme } from '../../types/Theme.interface';

// default theme from Bonsai https://github.com/finanzcheck/catalyst-bonsai/blob/develop/src/theme/themes/ThemeDefault.ts
// TODO: the theme overrides constants so they need to be merged with constants from figma
// TODO: also default need to be created from there
export const DEFAULT_THEME: Theme = {
  successColor: '#339E33',
  errorColor: '#C50E07',
  formElementDefault: '#b0b9c0',
  formElementValid: '#42c242',
  fontColor: '#4a535a',
  labelColor: '#7b8a96',
  primaryColor: '#F09103',
  primaryColorDark: '#C07402',
  secondaryColorLight: '#D0DCEA',
  secondaryColor: '#165297',
  secondaryColorDark: '#124279',
  tertiaryColor: '#F4D06F',
};
