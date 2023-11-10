import React from 'react';
import { Grid } from '@mui/material';
import { GridContainerProps } from './GridContainer.Interface';

export function GridContainerDefault({
  children,
  ...rest
}: GridContainerProps) {
  return (
    <Grid container spacing={2} {...rest}>
      {children}
    </Grid>
  );
}
