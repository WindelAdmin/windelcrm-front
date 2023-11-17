
import { DarkTheme } from '@/app/context/ThemeContext/Themes/DarkTheme';
import { useAppThemeContext } from '@/app/hooks/UseAppTheme.hook';
import { Notifications } from '@mui/icons-material';
import {
  Box,
  FormControlLabel,
  FormGroup,
  Stack,
  Switch,
  Typography
} from '@mui/material';


export function DrawerNotifications() {
  const { themeName } = useAppThemeContext();
  const titleAndIconColor =
    themeName === 'light'
      ? DarkTheme.palette.text.primary
      : DarkTheme.palette.text.primary;
  return (
    <Stack sx={{ m: 0, p: 2, mb: '4rem' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          gap: '1rem',
          mb: '4px',
        }}
      >
        <Notifications sx={{ color: titleAndIconColor, fontSize: '1.2rem' }} />
        <Typography
          sx={{
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '19px',
            color: titleAndIconColor,
          }}
        >
          Notificações
        </Typography>
      </Box>
      <Typography
        sx={{
          fontStyle: 'normal',
          fontWeight: 300,
          fontSize: '14px',
          lineHeight: '19px',
          width: '15rem',
          ml: '2.1rem',
          mb: '0.5rem',
          color: titleAndIconColor,
        }}
      >
        Selecione quais notificações você deseja receber.
      </Typography>
      <FormGroup
        sx={{
          ml: '1.8rem',
        }}
      >
        <FormControlLabel
          control={<Switch color="default" />}
          label={
            <Typography
              sx={{
                fontStyle: 'normal',
                fontWeight: 300,
                fontSize: '14px',
                lineHeight: '19px',
                color: titleAndIconColor,
              }}
            >
              Notificações gerais
            </Typography>
          }
        />
        <FormControlLabel
          control={<Switch color="default" />}
          label={
            <Typography
              sx={{
                fontStyle: 'normal',
                fontWeight: 300,
                fontSize: '14px',
                lineHeight: '19px',
                color: titleAndIconColor,
              }}
            >
              Recomendações
            </Typography>
          }
        />
      </FormGroup>
    </Stack>
  );
}
