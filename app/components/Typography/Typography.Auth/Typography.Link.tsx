import React from 'react';
import { Typography } from '@mui/material';
import { TypographyLoginProps } from './Typography.Link.Interface';

export function TypographyLogin({ text, ...rest }: TypographyLoginProps) {
  return (
    <Typography
      {...rest}
      sx={{
        fontWeight: 400,
        fontSize: '0.865rem',
        letterSpacing: '0.025rem',
        ':hover': {
          color: 'GrayText',
          cursor: 'pointer',
        },
      }}
    >
      {text}
    </Typography>
  );
}
