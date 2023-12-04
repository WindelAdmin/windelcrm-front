import PermissionableProps from '@/app/shared/interfaces/Permissionable.props';
import { ButtonProps } from '@mui/material';
import { ButtonTransitionProp } from '../IconButton/Button.Interface';


export interface WButtonProps extends ButtonProps, PermissionableProps {
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
