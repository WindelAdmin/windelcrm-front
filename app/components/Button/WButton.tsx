import React from 'react';
import { ButtonProps } from '@mui/material';
import { ButtonTransitionProp } from '../icon-button/Button.Interface';


export interface WButtonProps extends ButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  textButton: string;
  color:
    | 'error'
    | 'info'
    | 'warning'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'deepGrey';
}

export function WButton({
  variant = 'contained',
  textButton,
  color,
  ...rest
}: WButtonProps) {
  return (
    <ButtonTransitionProp
      {...rest}
      color={color}
      variant={variant}
      size="small"
    >
      {textButton}
    </ButtonTransitionProp>
  );
}
