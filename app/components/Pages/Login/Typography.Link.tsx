import { Typography } from '@mui/material';
import { ITypographyLogin } from './interfaces/Typography.Link.Interface';

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
