import { darkTheme, lightTheme } from '@/app/context/Theme/themes';
import { useAppThemeContext } from '@/app/context/Theme/useAppThemeContext';
import { Backdrop, Slide } from '@mui/material';
import { WindelLoading } from '../../UI/Lottie/LottieWindel';
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
