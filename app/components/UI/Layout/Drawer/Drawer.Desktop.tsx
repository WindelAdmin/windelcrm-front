import { DarkTheme } from '@/app/context/ThemeContext/Themes/DarkTheme';
import { LightTheme } from '@/app/context/ThemeContext/Themes/LightTheme';
import { useAppThemeContext } from '@/app/hooks/UseAppTheme.hook';
import { useToggleDrawer } from '@/app/hooks/UseToggleDrawer.hook';
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import { ReactNode } from 'react';



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
          ? LightTheme.palette.info.main
          : DarkTheme.palette.common.black,
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
          ? LightTheme.palette.background.paper
          : DarkTheme.palette.common.black,
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

