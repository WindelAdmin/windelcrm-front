import { ReactNode } from "react";

export interface ThemeProps {
  themeName: "dark" | "light";
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}
