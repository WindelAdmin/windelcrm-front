import React, { ReactNode } from 'react';
import { GridProps, Grid } from '@mui/material';

interface GridItemProps extends GridProps {
  children: ReactNode;
  md: number | boolean;
  sm?: number | boolean;
}

export function GridItem({ children, sm = 6, md, ...rest }: GridItemProps) {
  return (
    <Grid item xs={12} sm={sm} md={md} {...rest}>
      {children}
    </Grid>
  );
}
