import React from 'react';
import { IconButtonTransitionProp, WIconButtonProps } from './Button.Interface';

export function WIconButton({ icon, ...rest }: WIconButtonProps) {
  return (
    <IconButtonTransitionProp
      {...rest}
      aria-label="more"
      size="small"
      sx={{
        ':hover': {
          backgroundColor: 'inherit',
        },
      }}
    >
      {icon}
    </IconButtonTransitionProp>
  );
}
