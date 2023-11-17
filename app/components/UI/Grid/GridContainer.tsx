import { Grid, GridProps } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ReactNode } from 'react';

export interface GridContainerProps extends GridProps {
  children: ReactNode;
}

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
