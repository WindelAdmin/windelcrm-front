'use client';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import { SnackBarProvider } from '../toastProvider/toastContext';
import { AuthProvider } from '../userProvider';
import { UserProvider } from '../userProvider/userContext';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import { AppThemeProvider } from './themeContext';

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <AuthProvider>
        <AppThemeProvider>
          <UserProvider>
            <SnackBarProvider>
              <CssBaseline />
              {children}
            </SnackBarProvider>
          </UserProvider>
        </AppThemeProvider>
      </AuthProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
