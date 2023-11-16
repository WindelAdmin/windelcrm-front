import React from 'react';
import { Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { GridContainerProps } from './GridContainer.Interface';

export function GridContainer({ children, ...rest }: GridContainerProps) {
  const resolution = useMediaQuery('(min-height:900px)');
  const resolution768 = useMediaQuery('(max-height:768px)');

  return (
    <Grid
      container
      spacing={2}
      {...rest}
      sx={{
        height: resolution ? '85%' : resolution768 ? '79%' : '82%',
        paddingX: 2,
      }}
    >
      {children}
    </Grid>
  );
}
