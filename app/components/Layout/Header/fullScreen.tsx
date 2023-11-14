import React from 'react';
import { IconButton, IconButtonProps, colors } from '@mui/material';
import { ZoomInMapRounded, ZoomOutMapRounded } from '@mui/icons-material';
import { darkTheme, lightTheme } from '../../ThemeRegistry/theme';
import { useAppThemeContext } from '@/app/context/theme/useAppTheme';
import { IconButtonTransitionProp } from '../../Button/Button.Interface';

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
      color='inherit'
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
