import React from 'react';
import { Box } from '@mui/material';

import { PowerSettingsNewRounded } from '@mui/icons-material';

import { FullScreen } from './fullScreen';
import { Notifications } from './notifications';
import { Settings } from './settings';
import { AppBarAvatar } from './avatarHeader';
import { useAppThemeContext } from '@/app/context/Theme/useAppThemeContext';
import { useAuth } from '@/app/context/userProvider/useAuth';
import { WIconButton } from '../../Icon-button/WButton.Icon';
import { darkTheme, lightTheme } from '@/app/context/Theme/themes';


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
