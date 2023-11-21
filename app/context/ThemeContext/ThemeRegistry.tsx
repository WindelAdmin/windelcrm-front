'use client';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import { AuthProvider } from '../Auth.context';
import { BackdropProvider } from '../Backdrop.context';
import { SnackBarProvider } from '../Toast.context';
import { ToggleDrawerProvider } from '../ToggleDrawer.context';
import { ToggleDrawerMobileProvider } from '../ToggleDrawerMobile.context';
import { UserProvider } from '../User.context';
import { CompanyProvider } from '../UserContextCompany';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import { AppThemeProvider } from './ThemeContext';

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
       <BackdropProvider>
      <AuthProvider>
        <AppThemeProvider>
         
          <ToggleDrawerProvider>
            <ToggleDrawerMobileProvider>
              <UserProvider>
                <CompanyProvider>
                <SnackBarProvider>
                  <CssBaseline />
                  {children}
                </SnackBarProvider>
                </CompanyProvider>
              </UserProvider>
            </ToggleDrawerMobileProvider>
          </ToggleDrawerProvider>
        </AppThemeProvider>
      </AuthProvider>
      </BackdropProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
