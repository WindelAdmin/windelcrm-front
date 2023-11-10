import React from 'react';
import { Typography } from '@mui/material';
import { TypographyTitleProps } from './Typography.Title.Interface';

export function TypographyTitle({
  text,
  fontWeight,
  fontSize = '1.1rem',
  ...rest
}: TypographyTitleProps) {
  return (
    <Typography
      fontSize={fontSize}
      letterSpacing="0.025rem"
      fontWeight={fontWeight}
      justifyContent="center"
      {...rest}
    >
      {text}
    </Typography>
  );
}
