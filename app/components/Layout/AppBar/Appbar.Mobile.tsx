import React, { ReactNode } from 'react';
import { Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { useAppThemeContext } from '@/app/context/Theme/useAppThemeContext';
import { darkTheme, lightTheme } from '@/app/context/Theme/themes';


interface AppBarDesktopProps {
  open: boolean;
  children: ReactNode;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: '100%',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export function AppBarMobile({ open, children }: AppBarDesktopProps) {
  const { themeName } = useAppThemeContext();
  return (
    <AppBar
      elevation={0}
      open={open}
      sx={{
        position: 'fixed',
        bgcolor:
          themeName === 'light'
            ? lightTheme.palette.info.main
            : darkTheme.palette.common.black,
        height: '5rem',
        mx: 'auto',
        display: { xs: 'flex', sm: 'flex', md: 'none' },
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}
    >
      <Toolbar
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
        {children}
      </Toolbar>
    </AppBar>
  );
}
