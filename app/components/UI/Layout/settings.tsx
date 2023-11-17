'use client';
import { DarkTheme } from '@/app/context/ThemeContext/Themes/DarkTheme';
import { LightTheme } from '@/app/context/ThemeContext/Themes/LightTheme';
import { useAppThemeContext } from '@/app/hooks/UseAppTheme.hook';
import { Close, Settings as SettingsIcon } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import React from 'react';
import { WIconButton } from '../IconButton/WButton.Icon';
import { DrawerDarkAndLight } from './Header/DrawerSettings/DrawerDarkAndLight';
import { DrawerHelp } from './Header/DrawerSettings/DrawerHelp';
import { DrawerNotifications } from './Header/DrawerSettings/DrawerNotifications';
import { DrawerSettings } from './Header/DrawerSettings/DrawerSettings';



interface SettingsProps {
  mobile: boolean;
}

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export function Settings({ mobile }: SettingsProps) {
  const [openSettings, setOpenSettings] = React.useState(false);
  const { themeName } = useAppThemeContext();
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpenSettings(open);
    };
  const titleAndIconColor =
    themeName === 'light'
      ? DarkTheme.palette.text.primary
      : DarkTheme.palette.text.primary;
  return (
    <>
      <DrawerSettings
        toggleDrawerSettings={toggleDrawer(false)}
        open={openSettings}
      >
        <Typography
          sx={{
            m: 0,
            p: 2,
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '22px',
            color: titleAndIconColor,
          }}
        >
          Configurações
        </Typography>
        <IconButton
          aria-label="close"
          onClick={toggleDrawer(false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: titleAndIconColor,
          }}
        >
          <Close />
        </IconButton>
        <DrawerDarkAndLight />
        <DrawerNotifications />
        <DrawerHelp />
      </DrawerSettings>
      <WIconButton
        aria-label="more"
        id="long-button"
        onClick={toggleDrawer(true)}
        sx={{
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '1rem',
          lineHeight: '22px',
          color: 'inherit',
        }}
        icon={
          <SettingsIcon
            sx={{
              color: mobile
                ? themeName === 'light'
                  ? LightTheme.palette.common.white
                  : DarkTheme.palette.common.white
                : themeName === 'light'
                ? LightTheme.palette.info.main
                : DarkTheme.palette.deepGrey.main,
            }}
          />
        }
      />
    </>
  );
}
