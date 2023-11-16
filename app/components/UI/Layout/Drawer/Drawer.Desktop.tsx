import { useAppThemeContext } from '@/app/context/ThemeContext/useAppThemeContext';
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import { ReactNode } from 'react';

import { darkTheme, lightTheme } from '@/app/context/ThemeContext/themes';
import { useToggleDrawer } from '@/app/context/ToggleDrawer/useToggleDrawer';


interface DrawerSidebarProps {
  children: ReactNode;
}

const drawerWidth = 260;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => {
  const { themeName } = useAppThemeContext();
  return {
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      backgroundColor:
        themeName === 'light'
          ? lightTheme.palette.info.main
          : darkTheme.palette.common.black,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
      borderRight: '1px solid',
      borderRightColor:
        themeName === 'light'
          ? lightTheme.palette.background.paper
          : darkTheme.palette.common.black,
    },
  };
});

export function DrawerDesktop({ children }: DrawerSidebarProps) {
  const { open } = useToggleDrawer();
  return (
    <Drawer
      variant='permanent'
      open={open}
      sx={{
        display: { xs: 'none', sm: 'none', md: 'block' },
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </Drawer>
  );
}

