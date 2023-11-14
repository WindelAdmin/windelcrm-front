import React, { ReactNode } from 'react';
import { Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { useAppThemeContext } from '@/app/context/Theme/useAppThemeContext';
import { lightTheme } from '@/app/context/Theme/lightTheme';
import { darkTheme } from '@/app/context/Theme/darkTheme';


interface AppBarDesktopProps {
  open: boolean;
  children: ReactNode;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const drawerWidth = 260;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export function AppBarDesktop({ open, children }: AppBarDesktopProps) {
  const { themeName } = useAppThemeContext();
  return (
    <AppBar
      open={open}
      elevation={0}
      sx={{
        position: 'fixed',
        bgcolor:
          themeName === 'light'
            ? lightTheme.palette.background.default
            : darkTheme.palette.background.default,
        height: '5rem',
        borderBottom: '1px solid',
        borderBottomColor:
          themeName === 'light'
            ? darkTheme.palette.deepGrey.main
            : darkTheme.palette.background.paper,
        mx: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        maxWidth: {
          md: `calc(100% - 4.5rem)`,
        },
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
