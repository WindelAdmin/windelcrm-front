import { Box, Grid, GridProps } from '@mui/material';
import { ReactNode } from 'react';



import { useAppThemeContext } from '@/app/context/Theme/useAppTheme';
import { darkTheme, lightTheme } from '@/app/context/ThemeContext/themes';
import useMediaQuery from '@mui/material/useMediaQuery';
import { WPaper } from '../Paper/Paper';


interface GridItemProps extends GridProps {
  children: ReactNode;
  md: number | boolean;
  sm?: number | boolean;
}

export function GridItemNotPagination({
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
      <WPaper
        elevation={0}
        sx={{
          bgcolor:
            themeName === 'light'
              ? lightTheme.palette.background.default
              : darkTheme.palette.background.default,
          border:
            themeName === 'light' ? '1px solid #dadada' : '1px solid #616161',
        }}
      >
        <Box height={resolution ? '49rem' : resolution768 ? '30rem' : '40rem'}>
          {children}
        </Box>
      </WPaper>
    </Grid>
  );
}
