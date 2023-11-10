import React, { ReactNode } from 'react';
import { Grid } from '@mui/material';

interface AuthContainerProps {
  children: ReactNode;
}

export function AuthContainer({ children }: AuthContainerProps) {
  return (
    <Grid container maxWidth="xs" sx={{ height: '100vh' }}>
      {children}
    </Grid>
  );
}
