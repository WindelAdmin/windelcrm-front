
import { DarkTheme } from '@/app/context/ThemeContext/Themes/DarkTheme';
import { LightTheme } from '@/app/context/ThemeContext/Themes/LightTheme';
import { useAppThemeContext } from '@/app/hooks/UseAppTheme.hook';
import Drawer from '@mui/material/Drawer';
import React, { ReactNode } from 'react';


interface DrawerSettingsProps {
  toggleDrawerSettings: (event: React.KeyboardEvent | React.MouseEvent) => void;
  open: boolean;
  children: ReactNode;
}

export function DrawerSettings({
  toggleDrawerSettings,
  open,
  children,
}: DrawerSettingsProps) {
  const { themeName } = useAppThemeContext();
  return (
    <Drawer
      anchor='right'
      open={open}
      onClose={toggleDrawerSettings}
      sx={{
        zIndex: '2000',
        alignItems: 'center',
        justifyContent: 'center',

        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          bgcolor:
            themeName === 'light'
              ? LightTheme.palette.info.main
              : DarkTheme.palette.background.default,
          width: '300px',
        },
      }}
    >
      {children}
    </Drawer>
  );
}
