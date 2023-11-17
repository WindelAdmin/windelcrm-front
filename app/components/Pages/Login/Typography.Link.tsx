import { Typography, TypographyProps } from '@mui/material';
export interface ITypographyLogin extends TypographyProps {
  text: string;
}

export function TypographyLogin({ text, ...rest }: ITypographyLogin) {
  return (
    <Typography
      {...rest}
      sx={{
        fontWeight: 400,
        fontSize: '0.865rem',
        letterSpacing: '0.025rem',
        ':hover': {
          color: 'GrayText',
          cursor: 'pointer',
        },
      }}
    >
      {text}
    </Typography>
  );
}
