import { darkTheme, lightTheme } from '@/app/context/ThemeContext/themes';
import { useAppThemeContext } from '@/app/context/ThemeContext/useAppThemeContext';
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
              ? lightTheme.palette.info.main
              : darkTheme.palette.background.default,
          width: '300px',
        },
      }}
    >
      {children}
    </Drawer>
  );
}
