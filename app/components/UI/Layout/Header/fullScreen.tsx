import { darkTheme, lightTheme } from '@/app/context/Theme/themes';
import { useAppThemeContext } from '@/app/context/Theme/useAppThemeContext';
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
                ? lightTheme.palette.info.main
                : darkTheme.palette.deepGrey.main,
          }}
        />
      ) : (
        <ZoomInMapRounded
          sx={{
            color:
              themeName === 'light'
                ? lightTheme.palette.info.main
                : darkTheme.palette.deepGrey.main,
          }}
        />
      )}
    </IconButtonTransitionProp>
  );
}

