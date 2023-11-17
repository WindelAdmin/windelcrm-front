
import { DarkTheme } from '@/app/context/ThemeContext/Themes/DarkTheme';
import { LightTheme } from '@/app/context/ThemeContext/Themes/LightTheme';
import { useAppThemeContext } from '@/app/hooks/UseAppTheme.hook';
import { Box, Toolbar } from '@mui/material';
import Image from 'next/image';


export function HeaderSidebar() {
  const { themeName } = useAppThemeContext();
  return (
    <Toolbar sx={{ px: [0], height: '5rem' }}>
      <Box
        sx={{
          width: '100%',
          height: '5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor:
            themeName === 'light'
              ? LightTheme.palette.info.main
              : DarkTheme.palette.common.black,
        }}
      >
        <Image
          src="/logo/logoW.svg"
          alt="Logo Windel"
          width={80}
          height={40}
          priority
          quality={100}
        />
      </Box>
    </Toolbar>
  );
}
