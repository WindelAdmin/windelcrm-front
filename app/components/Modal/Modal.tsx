import React from 'react';
import { Box, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { TypographyTitle } from '../Typography/Typography.Title/WTypography.Title';

import { WModalProps } from './Interface.Modal';
import { useAppThemeContext } from '@/app/context/Theme/useAppTheme';
import { darkTheme, lightTheme } from '@/app/context/Theme/themes';

export function WModal({
  open,
  title,
  icon,
  children,
  width = '20rem',
}: WModalProps) {
  const { themeName } = useAppThemeContext();
  return (
    <Dialog
      open={open}
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: '10px',
          width: width,
          bgcolor:
            themeName === 'light'
              ? lightTheme.palette.common.white
              : darkTheme.palette.common.black,
        },
      }}
    >
      <Box
        sx={{
          marginTop: '.5rem',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: '5rem',
        }}
      >
        {icon}
      </Box>
      <TypographyTitle
        fontWeight={700}
        text={title}
        textAlign={'center'}
        sx={{
          fontSize: { xs: '1.2rem', sm: '1.4rem' },
        }}
      />

      <DialogContent
        sx={{
          padding: 2,
          borderRadius: '10px',
        }}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
}
