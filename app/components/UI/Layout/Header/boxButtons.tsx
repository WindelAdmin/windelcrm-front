import { darkTheme, lightTheme } from '@/app/context/ThemeContext/themes';
import { useAppThemeContext } from '@/app/context/ThemeContext/useAppThemeContext';
import { useAuth } from '@/app/context/UserProvider/useAuth';
import { PowerSettingsNewRounded } from '@mui/icons-material';
import { Box } from '@mui/material';
import { WIconButton } from '../../IconButton/WButton.Icon';
import { AppBarAvatar } from './avatarHeader';
import { FullScreen } from './fullScreen';
import { Settings } from './settings';

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
