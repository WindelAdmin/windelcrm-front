import React from 'react';
import { Stack } from '@mui/material';
import { FormButtonsProps } from './Form.Interface';
import { GridItem } from '../Grid/GridItem';

export const ContainerButtons = ({ children, ...rest }: FormButtonsProps) => {
  return (
    <GridItem xs={12} sm={12} md={12} textAlign="end">
      <Stack spacing={1} direction="row" justifyContent="flex-end" {...rest}>
        {children}
      </Stack>
    </GridItem>
  );
};
