import React, { ReactNode } from 'react';
import Drawer from '@mui/material/Drawer';
import { useAppThemeContext } from '@/app/context/Theme/useAppThemeContext';
import { darkTheme, lightTheme } from '@/app/context/Theme/themes';


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