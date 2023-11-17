import { DarkTheme } from '@/app/context/ThemeContext/Themes/DarkTheme';
import { LightTheme } from '@/app/context/ThemeContext/Themes/LightTheme';

export const StyledCustomDay = (isSelected: boolean, isLightTheme: boolean) => {
  return {
    color: isSelected
      ? isLightTheme
        ? LightTheme.palette.info.contrastText
        : DarkTheme.palette.warning.contrastText
      : isLightTheme
      ? LightTheme.palette.text.primary
      : DarkTheme.palette.text.primary,
    bgcolor: isSelected
      ? isLightTheme
        ? LightTheme.palette.info.main
        : DarkTheme.palette.primary.main
      : 'transparent',
    ':hover': {
      bgcolor: isLightTheme
        ? LightTheme.palette.info.dark
        : DarkTheme.palette.primary.dark,
      color: isLightTheme
        ? LightTheme.palette.text.primary
        : DarkTheme.palette.text.secondary,
    },
    ':focus': {
      bgcolor: isLightTheme
        ? LightTheme.palette.info.dark
        : DarkTheme.palette.primary.dark,
    },

    '&.Mui-selected': {
      fontWeight: 400,
      color: isSelected
        ? isLightTheme
          ? LightTheme.palette.info.contrastText
          : DarkTheme.palette.warning.contrastText
        : isLightTheme
        ? LightTheme.palette.text.primary
        : DarkTheme.palette.text.primary,

      bgcolor: isSelected
        ? isLightTheme
          ? LightTheme.palette.info.main
          : DarkTheme.palette.primary.main
        : 'transparent',
      ':hover': {
        bgcolor: isLightTheme
          ? LightTheme.palette.info.dark
          : DarkTheme.palette.primary.dark,
      },
      ':focus': {
        bgcolor: isLightTheme
          ? LightTheme.palette.info.dark
          : DarkTheme.palette.primary.dark,
      },
    },
  };
};
