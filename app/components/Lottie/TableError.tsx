import React from 'react';
import TableErrorFiles from '../../../public/assets/lottie/TableError.json';
import { Box, Stack } from '@mui/material';
import { TypographyTitle } from '../Typography/Typography.Title/WTypography.Title';
import { useLottieAnimation } from '@/utils/hooks/Lottie/useLottieAnimation';


export function TableError() {
  const { lottieView } = useLottieAnimation({
    width: 300,
    height: 300,
    animationData: TableErrorFiles,
    typeAnimation: 'simple',
  });

  return (
    <Stack mt="6rem">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {lottieView}
      </Box>
      <TypographyTitle
        textAlign="center"
        text="Ops! algo deu errado, tente novamente mais tarde."
        fontSize="1.4rem"
        fontWeight={500}
      />
    </Stack>
  );
}
