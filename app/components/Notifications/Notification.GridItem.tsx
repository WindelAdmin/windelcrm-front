import React, { ReactNode } from 'react';
import { GridProps, Grid, Box, Paper } from '@mui/material';

import { useAppThemeContext } from '@/app/context/theme/useAppTheme';

import useMediaQuery from '@mui/material/useMediaQuery';
import { WPaper } from '../../Paper/Paper';
import { lightTheme } from '../../ThemeRegistry/lightTheme';
import { darkTheme } from '../../ThemeRegistry/darkTheme';

interface GridItemProps extends GridProps {
  children: ReactNode;
  md: number | boolean;
  sm?: number | boolean;
}

export function GridItemNotifications({
  children,
  sm = 6,
  md,
  ...rest
}: GridItemProps) {
  const { themeName } = useAppThemeContext();
  const resolution = useMediaQuery('(min-height:900px)');
  const resolution768 = useMediaQuery('(max-height:768px)');

  return (
    <Grid item xs={12} sm={sm} md={md} {...rest}>
      <Box
        component={Paper}
        sx={{
          height: resolution ? '46rem' : resolution768 ? '33rem' : '36rem',
          overflow: 'auto',
          bgcolor:
            themeName === 'light'
              ? lightTheme.palette.common.white
              : darkTheme.palette.common.black,
        }}
      >
        {children}
      </Box>
    </Grid>
  );
}
