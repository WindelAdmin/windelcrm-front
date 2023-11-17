import { DarkTheme } from '@/app/context/ThemeContext/Themes/DarkTheme';
import { LightTheme } from '@/app/context/ThemeContext/Themes/LightTheme';
import { useAppThemeContext } from '@/app/hooks/UseAppTheme.hook';
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
              ? LightTheme.palette.common.white
              : DarkTheme.palette.common.black,
          zIndex: (theme) => theme.zIndex.drawer + 1,
          easing: LightTheme.transitions.easing.sharp,
          duration: LightTheme.transitions.duration.enteringScreen,
        }}
        open={open}
      >
        <WindelLoading />
      </Backdrop>
    </Slide>
  );
}
