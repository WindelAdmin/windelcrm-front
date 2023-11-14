import React from 'react';
import {
  Box,
  Typography,
  colors,
  FormControlLabel,
  FormGroup,
  Stack,
  Switch,
} from '@mui/material';
import { Notifications } from '@mui/icons-material';
import { useAppThemeContext } from '@/app/context/Theme/useAppThemeContext';
import { darkTheme } from '@/app/context/Theme/themes';


export function DrawerNotifications() {
  const { themeName } = useAppThemeContext();
  const titleAndIconColor =
    themeName === 'light'
      ? darkTheme.palette.text.primary
      : darkTheme.palette.text.primary;
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
