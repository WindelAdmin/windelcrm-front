import { BoxProps, StackProps } from '@mui/material';
import { ReactNode } from 'react';

export interface FormButtonsProps extends StackProps {
  children: ReactNode;
}

export interface FormProps extends BoxProps {
  children: ReactNode;
}
