import React from 'react';
import { Box, Toolbar } from '@mui/material';
import Image from 'next/image';
import { useAppThemeContext } from '@/app/context/theme/useAppTheme';
import { lightTheme, darkTheme } from '@/app/components/ThemeRegistry/theme';

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
              ? lightTheme.palette.info.main
              : darkTheme.palette.common.black,
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
