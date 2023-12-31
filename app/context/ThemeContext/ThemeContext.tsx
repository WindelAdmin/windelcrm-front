'use client';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { parseCookies, setCookie } from 'nookies';
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { DarkTheme } from './Themes/DarkTheme';
import { LightTheme } from './Themes/LightTheme';
export interface ThemeProps {
  themeName: "dark" | "light";
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeProps);

export function AppThemeProvider({ children }: ThemeProviderProps) {
  const [themeName, setThemeName] = useState<'dark' | 'light'>('light');

  const { 'nextTheme.mode': themeMode } = parseCookies();

  useEffect(() => {
    if (themeMode) {
      setThemeName(themeMode === 'dark' ? 'dark' : 'light');
    }
  }, [themeMode]);

  const toggleTheme = useCallback(() => {
    const newTheme = themeName === 'light' ? 'dark' : 'light';
    setThemeName(newTheme);
    setCookie(undefined, 'nextTheme.mode', newTheme, {
      maxAge: 30 * 24 * 60 * 60, // 1 mes
      path: '/',
    });
  }, [themeName]);

  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme;
    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width='100%'
          height='100vh'
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
