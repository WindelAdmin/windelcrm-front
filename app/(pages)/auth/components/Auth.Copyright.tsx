import React from 'react';
import { Box, Typography } from '@mui/material';
import { Coffee, Favorite } from '@mui/icons-material';

export function AuthCopyright() {
  return (
    <Box
      sx={{
        marginTop: 'auto',
        textAlign: 'center',
        display: { xs: 'none', sm: 'block' },
      }}
    >
      <Typography
        textAlign="center"
        sx={{
          fontSize: { xs: '0.8rem', sm: '0.9rem' },
        }}
      >
        Windel Sistemas 1.0.0.0
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '0.8rem', sm: '0.9rem' },
          }}
        >
          Feito com
        </Typography>
        <Favorite color="error" sx={{ marginX: '0.2rem' }} />
        <Typography
          sx={{
            fontSize: { xs: '0.8rem', sm: '0.9rem' },
          }}
        >
          e muito
        </Typography>
        <Coffee color="inherit" sx={{ marginX: '0.2rem' }} />
        <Typography
          sx={{
            fontSize: { xs: '0.8rem', sm: '0.9rem' },
          }}
        >
          pela Windel Sistemas
        </Typography>
      </Box>
    </Box>
  );
}
