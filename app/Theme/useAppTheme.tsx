import { useContext } from "react";
import { ThemeContext } from "./themeContext";

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};
