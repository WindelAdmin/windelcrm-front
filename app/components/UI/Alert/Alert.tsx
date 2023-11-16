import React from 'react';
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { WAlertProps } from './Alert.Interface';
import { TypographyTitle } from '../Typography/Typography.Title/WTypography.Title';
import { TypographyText } from '../Typography/Typography.Text/WTypography.Text';

export function WAlert({
  open,
  title,
  text,
  icon,
  children,
  width = '20rem',
}: WAlertProps) {
  return (
    <Dialog
      open={open}
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: '5px',
          width: width,
        },
      }}
    >
      <DialogTitle>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            fontSize: '5rem',
          }}
        >
          {icon}
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box textAlign="center">
          <TypographyTitle
            fontSize="1.2rem"
            fontWeight={700}
            text={title}
            mb="0.5rem"
          />

          <TypographyText fontSize="0.9rem" fontWeight={400} text={text} />
        </Box>
      </DialogContent>
      <DialogActions
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </DialogActions>
    </Dialog>
  );
}
