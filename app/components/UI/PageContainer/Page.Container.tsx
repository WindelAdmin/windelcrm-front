'use client'
import { Box, useMediaQuery } from '@mui/material';

import { PageContainerProps } from './Interface/Page.Container.Interface';

export function PageContainer({ children }: PageContainerProps) {
  const resolution = useMediaQuery('(min-height:900px)');
  const resolution768 = useMediaQuery('(max-height:768px)');
  return (
    <Box
      sx={{
        height: resolution ? '91%' : resolution768 ? '87%' : '89%',
        mt: '1rem',
        position: 'relative',
        marginX: { xs: 1, sm: 2, md: 4 },
      }}
    >
      {children}
    </Box>
  );
}
