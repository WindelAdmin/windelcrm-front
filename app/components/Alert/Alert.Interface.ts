import { ReactElement, ReactNode } from 'react';
import { DialogProps } from '@mui/material';

export interface WAlertProps extends DialogProps {
  open: boolean;
  icon?: ReactElement;
  title: string;
  text: string | ReactNode;
  children: ReactNode;
  width?: string;
}
