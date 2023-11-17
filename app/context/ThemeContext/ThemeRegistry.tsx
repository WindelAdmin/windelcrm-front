'use client';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import { AuthProvider } from '../Auth.context';
import { SnackBarProvider } from '../Toast.context';
import { ToggleDrawerProvider } from '../ToggleDrawer.context';
import { ToggleDrawerMobileProvider } from '../ToggleDrawerMobile.context';
import { UserProvider } from '../User.context';
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
          <ToggleDrawerProvider>
            <ToggleDrawerMobileProvider>
              <UserProvider>
                <SnackBarProvider>
                  <CssBaseline />
                  {children}
                </SnackBarProvider>
              </UserProvider>
            </ToggleDrawerMobileProvider>
          </ToggleDrawerProvider>
        </AppThemeProvider>
      </AuthProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
