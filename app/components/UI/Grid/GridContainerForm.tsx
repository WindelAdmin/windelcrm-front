import { Card, Grid } from '@mui/material';

import { useAppThemeContext } from '@/app/context/Theme/useAppTheme';
import { darkTheme, lightTheme } from '@/app/context/ThemeContext/themes';
import { TypographyTitle } from '../Typography/Typography.Title/WTypography.Title';
import { GridContainerFormProps } from './GridContainer.Interface';


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
            ? lightTheme.palette.common.white
            : darkTheme.palette.common.black,
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
