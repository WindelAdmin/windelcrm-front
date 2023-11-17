'use client';
import { Box, Paper, Toolbar } from '@mui/material';
import { useState } from 'react';

import { ToggleDrawerOpen } from './Header/toggleDrawerOpen';
import { SidebarMenu } from './Sidebar/MenuSidebar';

import { DarkTheme } from '@/app/context/ThemeContext/Themes/DarkTheme';
import { LightTheme } from '@/app/context/ThemeContext/Themes/LightTheme';
import { useAppThemeContext } from '@/app/hooks/UseAppTheme.hook';
import { useInfoCompany } from '@/app/hooks/UseInfoCompany.hook';
import { useToggleDrawer } from '@/app/hooks/UseToggleDrawer.hook';
import { TypographyTitle } from '../Typography/Typography.Title/WTypography.Title';
import { AppBarDesktop } from './AppBar/Appbar.Desktop';
import { AppBarMobile } from './AppBar/Appbar.Mobile';
import { DrawerDesktop } from './Drawer/Drawer.Desktop';
import { DrawerMobile } from './Drawer/Drawer.Mobile';
import { HeaderSidebar } from './Header/Sidebar/Sidebar.Header.Desktop';
import { HeaderSidebarMobile } from './Header/Sidebar/Sidebar.Header.Mobile';
import { ToggleDrawerMobile } from './Header/ToggleDrawerMobile';
import { LayoutSidebarAppBarProps } from './Layout.Interface';
import { BoxButtons } from './boxButtons';


export function LayoutSidebarAppBar({ children }: LayoutSidebarAppBarProps) {
  const company = useInfoCompany();
  const { open } = useToggleDrawer();
  const { themeName } = useAppThemeContext();
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullScreen(false);
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <AppBarDesktop open={open}>
        <ToggleDrawerOpen />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <TypographyTitle
            fontSize="1.2rem"
            fontWeight={600}
            text={'Soulbyte Studio'}
            color={themeName === 'light'
              ? LightTheme.palette.deepGrey.light
              : DarkTheme.palette.deepGrey.main}
          />
        <BoxButtons
            isFullScreen={isFullScreen}
            toggleFullScreen={toggleFullScreen}
            mobile={false}
          />
        </Box>
      </AppBarDesktop>

      <AppBarMobile open={open}>
        <Box sx={{ width: '100%' }}>
          <ToggleDrawerMobile />
        </Box>
      </AppBarMobile>

      <DrawerMobile>
        <HeaderSidebarMobile />
        <SidebarMenu />
      </DrawerMobile>

      <DrawerDesktop>
        <HeaderSidebar />
        <SidebarMenu />
      </DrawerDesktop>

      <Box
        sx={{
          backgroundColor:
            themeName === 'light'
              ? LightTheme.palette.background.default
              : DarkTheme.palette.background.default,
          width: '100%',
          height: '100vh',
        }}
      >
        <Box
          component={Paper}
          elevation={0}
          sx={{
            backgroundColor:
              themeName === 'light'
                ? LightTheme.palette.background.default
                : DarkTheme.palette.background.default,

            width: '100%',
            height: '100%',
            overflow: { xs: 'inherit', sm: 'inherit', md: 'auto' },
          }}
        >
          <Toolbar sx={{mb: 5}}/>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
