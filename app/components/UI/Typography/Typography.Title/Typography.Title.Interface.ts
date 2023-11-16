import { TypographyProps } from '@mui/material';

export interface TypographyTitleProps extends TypographyProps {
  text: string | undefined;
  fontWeight: 300 | 400 | 500 | 600 | 700;
  fontSize?: '1rem' | '1.1rem' | '1.2rem' | '1.4rem' | '1.6rem';
}
