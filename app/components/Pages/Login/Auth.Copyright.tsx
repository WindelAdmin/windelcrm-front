import { Box, Typography } from '@mui/material';

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
          fontSize: { xs: '0.8rem', sm: '0.9rem', color: 'gray' },
        }}
      >
        Windel CRM 1.0
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem', color: 'gray'}} }
        >
         Copyright 2023 Windel Sistemas - Todos os direitos reservados
        </Typography>
      </Box>
    </Box>
  );
}
