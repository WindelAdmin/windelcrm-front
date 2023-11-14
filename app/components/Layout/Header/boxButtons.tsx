import React from 'react';
import { Box } from '@mui/material';

import { PowerSettingsNewRounded } from '@mui/icons-material';

import { FullScreen } from './fullScreen';
import { Notifications } from './notifications';
import { Settings } from './settings';
import { AppBarAvatar } from './avatarHeader';
import { darkTheme, lightTheme } from '../../ThemeRegistry/theme';

import { useAppThemeContext } from '@/app/context/theme/useAppTheme';
import { useAuth } from '@/app/context/useAuth';
import { WIconButton } from '../../Button/WButton.Icon';

interface BoxButtonsProps {
  toggleFullScreen: () => void;
  isFullScreen: boolean;
  mobile: boolean;
}

export function BoxButtons({
  toggleFullScreen,
  isFullScreen,
  mobile,
}: BoxButtonsProps) {
  const { themeName } = useAppThemeContext();
  const auth = useAuth();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.3rem',
      }}
    >
      <AppBarAvatar />
      {!mobile && (
        <FullScreen
          isFullScreen={isFullScreen}
          toggleFullScreen={toggleFullScreen}
        />
      )}
      <Notifications mobile={mobile} />
      <Settings mobile={mobile} />
      <WIconButton
        onClick={auth.logout}
        icon={
          <PowerSettingsNewRounded
            sx={{
              color: mobile
                ? themeName === 'light'
                  ? lightTheme.palette.common.white
                  : darkTheme.palette.common.white
                : themeName === 'light'
                ? lightTheme.palette.info.main
                : darkTheme.palette.deepGrey.main,
            }}
          />
        }
      />
    </Box>
  );
}
