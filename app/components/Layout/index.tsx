'use client';
import React, { useState } from 'react';
import { Box, Paper, Toolbar } from '@mui/material';

import { BoxButtons } from './Header/boxButtons';
import { ToggleDrawerOpen } from './Header/toggleDrawerOpen';
import { SidebarMenu } from './Sidebar/MenuSidebar';
import { useToggleDrawer } from '@/app/context/toggleDrawer/useToggleDrawer';

import { ToggleDrawerMobile } from './Header/ToggleDrawerMobile';
import { AppBarDesktop } from './AppBar/Appbar.Desktop';
import { AppBarMobile } from './AppBar/Appbar.Mobile';
import { DrawerDesktop } from './Drawer/Drawer.Desktop';
import { DrawerMobile } from './Drawer/Drawer.Mobile';
import { HeaderSidebar } from './Header/Sidebar/Sidebar.Header.Desktop';
import { HeaderSidebarMobile } from './Header/Sidebar/Sidebar.Header.Mobile';
import { LayoutSidebarAppBarProps } from './Layout.Interface';
import { TypographyTitle } from '../Typography/Typography.Title/WTypography.Title';
import { useInfoEmpresa } from '@/app/context/empresaProvider/useInfoEmpresa';
import { useAppThemeContext } from '@/app/context/Theme/useAppThemeContext';
import { darkTheme, lightTheme } from '@/app/context/Theme/themes';


export function LayoutSidebarAppBar({ children }: LayoutSidebarAppBarProps) {
  const empresa = useInfoEmpresa();
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
            text={empresa?.nome}
            color={
              themeName === 'light'
                ? lightTheme.palette.common.black
                : darkTheme.palette.common.white
            }
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
        <BoxButtons
          isFullScreen={isFullScreen}
          toggleFullScreen={toggleFullScreen}
          mobile={true}
        />
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
              ? lightTheme.palette.background.default
              : darkTheme.palette.background.default,
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
                ? lightTheme.palette.background.default
                : darkTheme.palette.background.default,

            width: '100%',
            height: '100%',
            overflow: { xs: 'inherit', sm: 'inherit', md: 'auto' },
          }}
        >
          <Toolbar />

          {children}
        </Box>
      </Box>
    </Box>
  );
}
