import { Box } from '@mui/material';

import { PowerSettingsNewRounded } from '@mui/icons-material';

import { AppBarAvatar } from './avatarHeader';
import { FullScreen } from './fullScreen';
import { Notifications } from './notifications';
import { Settings } from './settings';

import { DarkTheme } from '@/app/context/ThemeContext/Themes/DarkTheme';
import { LightTheme } from '@/app/context/ThemeContext/Themes/LightTheme';
import { useAppThemeContext } from '@/app/hooks/UseAppTheme.hook';
import { useAuth } from '@/app/hooks/UseAuth.hook';
import { WIconButton } from '../IconButton/WButton.Icon';

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
                  ? LightTheme.palette.common.white
                  : DarkTheme.palette.common.white
                : themeName === 'light'
                ? LightTheme.palette.info.main
                : DarkTheme.palette.deepGrey.main,
            }}
          />
        }
      />
    </Box>
  );
}
