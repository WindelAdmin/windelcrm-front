
import { DarkTheme } from '@/app/context/ThemeContext/Themes/DarkTheme';
import { LightTheme } from '@/app/context/ThemeContext/Themes/LightTheme';
import { useAppThemeContext } from '@/app/hooks/UseAppTheme.hook';
import { useToggleDrawerMobile } from '@/app/hooks/UseToggleDrawerMobile.hook';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { ReactNode } from 'react';



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
                ? LightTheme.palette.info.main
                : DarkTheme.palette.common.black,
          },
        }}
      >
        {children}
      </Drawer>
    </Box>
  );
}
