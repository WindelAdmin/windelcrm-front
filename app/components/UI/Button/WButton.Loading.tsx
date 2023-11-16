'use client';
import { LoadingButtonProps } from '@mui/lab';
import { LoadingButtonTransitionProp } from '../IconButton/Button.Interface';

export interface WButtonProps extends LoadingButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  textButton: string;
  color: 'error' | 'info' | 'warning' | 'primary' | 'secondary' | 'success';
  size?: 'small' | 'medium';
}

export function WButtonLoading({
  variant = 'contained',
  textButton,
  color,
  size = 'small',
  ...rest
}: WButtonProps) {
  return (
    <LoadingButtonTransitionProp
      color={color}
      variant={variant}
      sx={{
        letterSpacing: '0.025rem',
        fontWeight: 600,
      }}
      size={size}
      {...rest}
    >
      {textButton}
    </LoadingButtonTransitionProp>
  );
}
