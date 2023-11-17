
import { DarkTheme } from '@/app/context/ThemeContext/Themes/DarkTheme';
import { LightTheme } from '@/app/context/ThemeContext/Themes/LightTheme';
import { useAppThemeContext } from '@/app/hooks/UseAppTheme.hook';
import { List, Paper } from '@mui/material';

export function HeaderSidebarMobile() {
  const { themeName } = useAppThemeContext();

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          overflowX: 'hidden',
          borderRadius: 0,
          bgcolor:
            themeName === 'light'
              ? LightTheme.palette.info.main
              : DarkTheme.palette.common.black,
        }}
      >
        <List
          sx={{
            width: '100%',
            maxWidth: 280,
            bgcolor:
              themeName === 'light'
                ? LightTheme.palette.info.main
                : DarkTheme.palette.common.black,
          }}
        >
          
        </List>
      </Paper>
    </>
  );
}
