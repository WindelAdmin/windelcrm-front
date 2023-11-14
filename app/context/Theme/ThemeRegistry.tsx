'use client';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import { AppThemeProvider } from './themeContext';
import { UserProvider } from '../userProvider/userContext';
import { AuthProvider } from '../userProvider';

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'muia' }}>
      <AuthProvider>
      <AppThemeProvider>
      <UserProvider>
        <CssBaseline />
        {children}
        </UserProvider>
      </AppThemeProvider>
      </AuthProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
