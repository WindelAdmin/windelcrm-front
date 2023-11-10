import React from 'react';
import { Grid } from '@mui/material';
import { GridContainerProps } from './GridContainer.Interface';

export function GridContainerCard({ children, ...rest }: GridContainerProps) {
  return (
    <Grid
      container
      spacing={2}
      {...rest}
      sx={{
        display: { xs: 'flex', sm: 'flex', md: 'none' },
        paddingX: 2,
      }}
    >
      {children}
    </Grid>
  );
}
