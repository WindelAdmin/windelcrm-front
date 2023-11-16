'use client';
import React from 'react';
import Lottie from 'lottie-react';
import TableEmptyFilesLightTheme from '../../../public/assets/lottie/TableEmptyFiles_lightTheme.json';
import TableEmptyFilesDarkTheme from '../../../public/assets/lottie/TableEmptyFiles_darkTheme.json';

import { Box, Stack } from '@mui/material';
import { TypographyTitle } from '../Typography/Typography.Title/WTypography.Title';


const style = {
  height: 300,
  width: 300,
  display: 'flex',
  alignItens: 'center',
  justifyContent: 'center',
};

export function TableEmpty() {
  const { themeName } = useAppThemeContext();

  return (
    <Stack mt="8rem">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {themeName === 'light' ? (
          <Lottie animationData={TableEmptyFilesLightTheme} style={style} />
        ) : (
          <Lottie animationData={TableEmptyFilesDarkTheme} style={style} />
        )}
      </Box>
      <TypographyTitle
        textAlign="center"
        text="Sem registros a serem exibidos!"
        fontSize="1.6rem"
        fontWeight={500}
      />
    </Stack>
  );
}
function useAppThemeContext(): { themeName: any; } {
  throw new Error('Function not implemented.');
}

