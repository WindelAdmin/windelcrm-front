import { useAppThemeContext } from '@/app/context/Theme/useAppTheme';
import { darkTheme, lightTheme } from '@/app/context/ThemeContext/themes';
import { IconButtonProps, Typography } from '@mui/material';
import { ReactElement, ReactNode } from 'react';
import { IconButtonTransitionProp } from './Button.Interface';


interface WIconButtonTitleProps extends IconButtonProps {
  icon: ReactElement;
  tooltip?: string;
  children: ReactNode;
}

export function WIconButtonTitle({
  icon,
  children,
  ...rest
}: WIconButtonTitleProps) {
  const { themeName } = useAppThemeContext();

  return (
    <IconButtonTransitionProp
      aria-label="more"
      size="small"
      sx={{
        color:
          themeName === 'light'
            ? lightTheme.palette.common.black
            : darkTheme.palette.common.white,
        ':hover': {
          backgroundColor: 'inherit',
        },
      }}
      {...rest}
    >
      {icon}
      <Typography
        sx={{
          color: 'inherit',
          ml: 0.5,
          fontSize: '1rem',
          letterSpacing: '0.025rem',
          fontWeight: 500,
          justifyContent: 'center',
        }}
      >
        {children}
      </Typography>
    </IconButtonTransitionProp>
  );
}
