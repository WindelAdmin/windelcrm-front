
import { DarkTheme } from '@/app/context/ThemeContext/Themes/DarkTheme';
import { LightTheme } from '@/app/context/ThemeContext/Themes/LightTheme';
import { useAppThemeContext } from '@/app/hooks/UseAppTheme.hook';
import { ZoomInMapRounded, ZoomOutMapRounded } from '@mui/icons-material';
import { IconButtonProps } from '@mui/material';
import { IconButtonTransitionProp } from '../../IconButton/Button.Interface';

interface FullScreenProps extends IconButtonProps {
  toggleFullScreen: () => void;
  isFullScreen: boolean;
}

export function FullScreen({
  toggleFullScreen,
  isFullScreen,
  ...rest
}: FullScreenProps) {
  const { themeName } = useAppThemeContext();
  return (
    <IconButtonTransitionProp
      color="inherit"
      onClick={toggleFullScreen}
      {...rest}
      sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}
    >
      {!isFullScreen ? (
        <ZoomOutMapRounded
          sx={{
            color:
              themeName === 'light'
                ? LightTheme.palette.info.main
                : DarkTheme.palette.deepGrey.main,
          }}
        />
      ) : (
        <ZoomInMapRounded
          sx={{
            color:
              themeName === 'light'
                ? LightTheme.palette.info.main
                : DarkTheme.palette.deepGrey.main,
          }}
        />
      )}
    </IconButtonTransitionProp>
  );
}

