import React from 'react';
import { Typography } from '@mui/material';
import { TypographyTextProps } from './Typography.Text.Interface';

export function TypographyText({
  text,
  fontWeight = 500,
  fontSize = '0.675rem',
  textAlign = 'center',
  wordBreak = 'normal',
  ...rest
}: TypographyTextProps) {
  return (
    <Typography
      {...rest}
      sx={{
        fontWeight: fontWeight,
        fontSize: fontSize,
        letterSpacing: '0.025rem',
        textAlign: textAlign,
        wordBreak: wordBreak,
      }}
    >
      {text}
    </Typography>
  );
}
