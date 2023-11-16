import React, { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useToggleDrawerMobile } from '@/app/context/toggleDrawerMobile/useToggleDrawerMobile';
import { useAppThemeContext } from '@/app/context/Theme/useAppThemeContext';
import { darkTheme, lightTheme } from '@/app/context/Theme/themes';



interface DrawerMobileProps {
  children: ReactNode;
}

export function DrawerMobile({ children }: DrawerMobileProps) {
  const { openMobile, toggleDrawerMobile } = useToggleDrawerMobile();
  const { themeName } = useAppThemeContext();
  return (
    <Box sx={{ mt: '7rem' }}>
      <Drawer
        anchor='left'
        open={openMobile}
        onClose={() => toggleDrawerMobile(false)}
        sx={{
          zIndex: 1202,
          alignItems: 'center',
          justifyContent: 'center',
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '280px',
            backgroundColor:
              themeName === 'light'
                ? lightTheme.palette.info.main
                : darkTheme.palette.common.black,
          },
        }}
      >
        {children}
      </Drawer>
    </Box>
  );
}
