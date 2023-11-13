import React, { createContext, useState } from 'react';
import { Alert, AlertTitle, Grow, Snackbar, Typography } from '@mui/material';
import { SnackBarContextActions } from './toast.interface';
import { useAppThemeContext } from '../Theme/useAppTheme';
import { darkTheme, lightTheme } from '../Theme/themes';


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
                  ? lightTheme.palette.common.white
                  : darkTheme.palette.success.light
                : severity === 'error'
                ? themeName === 'light'
                  ? lightTheme.palette.common.white
                  : darkTheme.palette.error.main
                : severity === 'warning'
                ? themeName === 'light'
                  ? lightTheme.palette.common.white
                  : darkTheme.palette.warning.light
                : themeName === 'light'
                ? lightTheme.palette.common.white
                : darkTheme.palette.info.light,
            color:
              severity === 'success'
                ? themeName === 'light'
                  ? darkTheme.palette.success.light
                  : lightTheme.palette.common.white
                : severity === 'error'
                ? themeName === 'light'
                  ? lightTheme.palette.error.light
                  : darkTheme.palette.common.white
                : severity === 'warning'
                ? themeName === 'light'
                  ? lightTheme.palette.warning.light
                  : darkTheme.palette.common.white
                : themeName === 'light'
                ? darkTheme.palette.info.light
                : lightTheme.palette.common.white,
            border: '1px solid',
            borderColor:
              severity === 'success'
                ? themeName === 'light'
                  ? darkTheme.palette.success.light
                  : darkTheme.palette.success.light
                : severity === 'error'
                ? themeName === 'light'
                  ? lightTheme.palette.error.light
                  : lightTheme.palette.error.light
                : severity === 'warning'
                ? themeName === 'light'
                  ? lightTheme.palette.warning.light
                  : lightTheme.palette.warning.light
                : themeName === 'light'
                ? darkTheme.palette.info.light
                : darkTheme.palette.info.light,
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
