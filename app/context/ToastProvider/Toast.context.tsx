import { Alert, AlertTitle, Grow, Snackbar, Typography } from '@mui/material';
import React, { createContext, useState } from 'react';
import { SnackBarContextActions } from './Toast.interface';

import { DarkTheme } from '../ThemeContext/Themes/DarkTheme';
import { LightTheme } from '../ThemeContext/Themes/LightTheme';
import { useAppThemeContext } from '../ThemeContext/UseAppTheme.context';


export const SnackBarContext = createContext({} as SnackBarContextActions);

export function SnackBarProvider({ children }: { children: React.ReactNode }) {
  const { themeName } = useAppThemeContext();
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [severity, setSeverity] = useState<
    'success' | 'error' | 'info' | 'warning'
  >('info');

  const showSnackBar = (
    title: string,
    text: string,
    severity: 'success' | 'error' | 'info' | 'warning'
  ) => {
    setTitle(title);
    setMessage(text);
    setSeverity(severity);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SnackBarContext.Provider value={{ showSnackBar }}>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        TransitionComponent={Grow}
        transitionDuration={{ enter: 500, exit: 1000 }}
        TransitionProps={{ enter: true, exit: false }}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity={severity}
          sx={{
            width: '100%',
            bgcolor:
              severity === 'success'
                ? themeName === 'light'
                  ? LightTheme.palette.common.white
                  : DarkTheme.palette.success.light
                : severity === 'error'
                ? themeName === 'light'
                  ? LightTheme.palette.common.white
                  : DarkTheme.palette.error.main
                : severity === 'warning'
                ? themeName === 'light'
                  ? LightTheme.palette.common.white
                  : DarkTheme.palette.warning.light
                : themeName === 'light'
                ? LightTheme.palette.common.white
                : DarkTheme.palette.info.light,
            color:
              severity === 'success'
                ? themeName === 'light'
                  ? DarkTheme.palette.success.light
                  : LightTheme.palette.common.white
                : severity === 'error'
                ? themeName === 'light'
                  ? LightTheme.palette.error.light
                  : DarkTheme.palette.common.white
                : severity === 'warning'
                ? themeName === 'light'
                  ? LightTheme.palette.warning.light
                  : DarkTheme.palette.common.white
                : themeName === 'light'
                ? DarkTheme.palette.info.light
                : LightTheme.palette.common.white,
            border: '1px solid',
            borderColor:
              severity === 'success'
                ? themeName === 'light'
                  ? DarkTheme.palette.success.light
                  : DarkTheme.palette.success.light
                : severity === 'error'
                ? themeName === 'light'
                  ? LightTheme.palette.error.light
                  : LightTheme.palette.error.light
                : severity === 'warning'
                ? themeName === 'light'
                  ? LightTheme.palette.warning.light
                  : LightTheme.palette.warning.light
                : themeName === 'light'
                ? DarkTheme.palette.info.light
                : DarkTheme.palette.info.light,
          }}
        >
          <AlertTitle
            sx={{
              fontSize: '1.1rem',
              letterSpacing: '0.030rem',
            }}
          >
            {title}
          </AlertTitle>

          <Typography
            sx={{
              letterSpacing: '0.030rem',
            }}
          >
            {message}
          </Typography>
        </Alert>
      </Snackbar>
      {children}
    </SnackBarContext.Provider>
  );
}
