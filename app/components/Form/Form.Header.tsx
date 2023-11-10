import React from 'react';
import { Box } from '@mui/material';
import { TypographyTitle } from '../Typography/Typography.Title/WTypography.Title';

export interface FormHeaderProps {
  title: string;
}
export function FormHeader({ title }: FormHeaderProps) {
  return (
    <Box
      sx={{
        width: '100%',
        padding: 1,
      }}
    >
      <TypographyTitle
        fontSize='1.4rem'
        text={title}
        fontWeight={600}
        marginLeft={1}
      />
    </Box>
  );
}
