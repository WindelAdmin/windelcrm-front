
import { useContext } from "react";
import { ThemeContext } from '../context/ThemeContext/ThemeContext';

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};
