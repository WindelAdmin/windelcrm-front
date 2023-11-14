import React from 'react';
import { Box } from '@mui/material';
import { LoadWindel } from '../components/Lottie/LoadingWindel';

export default function Loading() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <LoadWindel />
    </Box>
  );
}
