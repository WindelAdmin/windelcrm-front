import { Grid, GridProps } from '@mui/material';
import { ReactNode } from 'react';

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
