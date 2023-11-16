import React from 'react';
import { Box, Stack } from '@mui/material';
import { FormProps } from './Form.Interface';

export function Form({ children, ...rest }: FormProps) {
  return (
    <Box component='form' noValidate width='100%' {...rest}>
      <Stack spacing={2} sx={{ pb: 1 }}>
        {children}
      </Stack>
    </Box>
  );
}
