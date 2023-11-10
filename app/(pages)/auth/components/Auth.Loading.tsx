import React from 'react';
import { Slide, Backdrop } from '@mui/material';
import { darkTheme, lightTheme } from '@/app/Theme/themes';

import { WindelLoading } from '@/app/components/Lottie/LottieWindel';
import { useAppThemeContext } from '@/app/Theme/useAppTheme';


interface WBackDropProps {
  open: boolean;
}

export function WBackdrop({ open }: WBackDropProps) {
  const { themeName } = useAppThemeContext();
  return (
    <Slide direction="up" in={open} mountOnEnter unmountOnExit>
      <Backdrop
        sx={{
          color: '#fff',
          bgcolor:
            themeName === 'light'
              ? lightTheme.palette.common.white
              : darkTheme.palette.common.black,
          zIndex: (theme) => theme.zIndex.drawer + 1,
          easing: lightTheme.transitions.easing.sharp,
          duration: lightTheme.transitions.duration.enteringScreen,
        }}
        open={open}
      >
        <WindelLoading />
      </Backdrop>
    </Slide>
  );
}
