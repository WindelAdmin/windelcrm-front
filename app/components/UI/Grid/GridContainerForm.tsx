import { Card, Grid, GridProps } from '@mui/material';

import { DarkTheme } from '@/app/context/ThemeContext/Themes/DarkTheme';
import { LightTheme } from '@/app/context/ThemeContext/Themes/LightTheme';
import { useAppThemeContext } from '@/app/hooks/UseAppTheme.hook';
import { ReactNode } from 'react';
import { TypographyTitle } from '../Typography/Typography.Title/WTypography.Title';

export interface GridContainerFormProps extends GridProps {
  children: ReactNode;
  title?: string;
}

export function GridContainerForm({
  children,
  title = '',
  ...rest
}: GridContainerFormProps) {
  const { themeName } = useAppThemeContext();
  return (
    <Card
      sx={{
        bgcolor:
          themeName == 'light'
            ? LightTheme.palette.common.white
            : DarkTheme.palette.common.black,
        paddingX: 4,
        paddingBottom: 4,
        paddingTop: 2,
        marginBottom: 2,
      }}
    >
      <TypographyTitle
        fontSize="1.2rem"
        fontWeight={600}
        text={title}
        marginBottom={1}
        marginTop={title.length > 0 ? 0 : 4}
      />
      <Grid container spacing={2} {...rest} sx={{ ml: -2 }}>
        {children}
      </Grid>
    </Card>
  );
}
