'use client';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import { SnackBarProvider } from '../ToastProvider/toastContext';
import { AuthProvider } from '../UserContext/Auth.context';
import { UserProvider } from '../UserContext/User.context';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import { AppThemeProvider } from './ThemeContext';

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
