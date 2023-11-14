import React from 'react';
import { Box, Toolbar } from '@mui/material';
import Image from 'next/image';
import { darkTheme, lightTheme } from '@/app/context/Theme/themes';
import { useAppThemeContext } from '@/app/context/Theme/useAppThemeContext';


export function HeaderSidebarMobile() {
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
        {/* <WIconButton
          icon={
            <Cancel
              sx={{
                color:
                  themeName === 'light'
                    ? lightTheme.palette.common.white
                    : darkTheme.palette.common.white,
              }}
            />
          }
        /> */}
      </Box>
    </Toolbar>
  );
}
