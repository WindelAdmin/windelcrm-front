import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useAppThemeContext } from '@/app/Theme/useAppTheme';

export function AuthHeader() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: {
          xs: '1rem',
          sm: '10rem',
          md: '5rem',
          lg: '8rem',
          xl: '15rem',
        },
      }}
    >
      <Image
        src="/logo/logoW.svg"
        alt="Logo Windel"
        width={170}
        height={100}
        priority
      />

      <Typography
        sx={{
          fontSize: '2rem',
          fontWeight: 600,
          lineHeight: 0,
          letterSpacing: '0.2rem',
          mt: '1rem',
        }}
      >
        Windel
      </Typography>
      <Typography
        sx={{
          fontSize: '0.8rem',
          fontWeight: 400,
          lineHeight: 0,
          letterSpacing: '0.025rem',
          mt: '1.2rem',
        }}
      >
        sistemas de gestão
      </Typography>
    </Box>
  );
}
