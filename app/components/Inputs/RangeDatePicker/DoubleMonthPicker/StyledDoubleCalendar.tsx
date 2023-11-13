import { darkTheme, lightTheme } from "@/app/context/Theme/themes";


export const StyledCustomDay = (isSelected: boolean, isLightTheme: boolean) => {
  return {
    color: isSelected
      ? isLightTheme
        ? lightTheme.palette.info.contrastText
        : darkTheme.palette.warning.contrastText
      : isLightTheme
      ? lightTheme.palette.text.primary
      : darkTheme.palette.text.primary,
    bgcolor: isSelected
      ? isLightTheme
        ? lightTheme.palette.info.main
        : darkTheme.palette.primary.main
      : "transparent",
    ":hover": {
      bgcolor: isLightTheme
        ? lightTheme.palette.info.dark
        : darkTheme.palette.primary.dark,
      color: isLightTheme
        ? lightTheme.palette.text.primary
        : darkTheme.palette.text.secondary,
    },
    ":focus": {
      bgcolor: isLightTheme
        ? lightTheme.palette.info.dark
        : darkTheme.palette.primary.dark,
    },

    "&.Mui-selected": {
      fontWeight: 400,
      color: isSelected
        ? isLightTheme
          ? lightTheme.palette.info.contrastText
          : darkTheme.palette.warning.contrastText
        : isLightTheme
        ? lightTheme.palette.text.primary
        : darkTheme.palette.text.primary,

      bgcolor: isSelected
        ? isLightTheme
          ? lightTheme.palette.info.main
          : darkTheme.palette.primary.main
        : "transparent",
      ":hover": {
        bgcolor: isLightTheme
          ? lightTheme.palette.info.dark
          : darkTheme.palette.primary.dark,
      },
      ":focus": {
        bgcolor: isLightTheme
          ? lightTheme.palette.info.dark
          : darkTheme.palette.primary.dark,
      },
    },
  };
};
