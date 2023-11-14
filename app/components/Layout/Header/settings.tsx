'use client';
import React from 'react';
import { IconButton, Typography } from '@mui/material';
import { Close, Settings as SettingsIcon } from '@mui/icons-material';

import { darkTheme, lightTheme } from '../../ThemeRegistry/theme';
import { useAppThemeContext } from '@/app/context/theme/useAppTheme';
import { DrawerSettings } from './DrawerSettings/DrawerSettings';
import { DrawerDarkAndLight } from './DrawerSettings/DrawerDarkAndLight';
import { DrawerNotifications } from './DrawerSettings/DrawerNotifications';
import { DrawerHelp } from './DrawerSettings/DrawerHelp';
import { DrawerFooter } from './DrawerSettings/DrawerFooter';
import { WIconButton } from '../../Button/WButton.Icon';

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
      ? darkTheme.palette.text.primary
      : darkTheme.palette.text.primary;
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
        <DrawerFooter />
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
                  ? lightTheme.palette.common.white
                  : darkTheme.palette.common.white
                : themeName === 'light'
                ? lightTheme.palette.info.main
                : darkTheme.palette.deepGrey.main,
            }}
          />
        }
      />
    </>
  );
}
