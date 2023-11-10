import React from 'react';
import { IconButtonProps } from '@mui/material';
import { DeleteRounded } from '@mui/icons-material';
import { IconButtonTransitionProp } from './Button.Interface';

export function WIconButtonDelete({ ...rest }: IconButtonProps) {
  return (
    <IconButtonTransitionProp
      aria-label="edit"
      id="edit"
      size="small"
      color="inherit"
      sx={{
        ':hover': {
          backgroundColor: 'inherit',
        },
      }}
      {...rest}
    >
      <DeleteRounded />
    </IconButtonTransitionProp>
  );
}
