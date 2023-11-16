import { TypographyProps } from '@mui/material';
import { ReactNode } from 'react';

export interface TypographyTextProps extends TypographyProps {
  text: string | ReactNode;
  fontWeight?: 300 | 400 | 500 | 600 | 700;
  fontSize?:
    | '0.675rem'
    | '0.865rem'
    | '0.875rem'
    | '0.9rem'
    | '1rem'
    | '1.1rem'
    | '1.2rem';
  textAlign?: 'left' | 'right' | 'center';
  wordBreak?: any;
}
