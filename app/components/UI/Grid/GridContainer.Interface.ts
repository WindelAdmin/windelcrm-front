import { GridProps } from '@mui/material';
import { ReactNode } from 'react';

export interface GridItemProps extends GridProps {
  children: ReactNode;
  md: number | boolean;
  sm?: number | boolean;
}

export interface GridContainerProps extends GridProps {
  children: ReactNode;
}
export interface GridContainerFormProps extends GridProps {
  children: ReactNode;
  title?: string;
}
