'use client';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import { AppThemeProvider } from './themeContext';

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'muia' }}>
      <AppThemeProvider>
        <CssBaseline />
        {children}
      </AppThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
