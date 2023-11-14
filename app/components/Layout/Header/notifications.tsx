import React, { MouseEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { ClearAllRounded } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { WStyledBadge } from './Sidebar/StyleBadge';
import { TypographyTitle } from '../../Typography/Typography.Title/WTypography.Title';
import { TypographyText } from '../../Typography/Typography.Text/WTypography.Text';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/userProvider/useAuth';
import { useAppThemeContext } from '@/app/context/Theme/useAppThemeContext';
import { AllNotificationsProps } from '../../Notifications/Notifications.Interface';
import { IconButtonTransitionProp } from '../../Icon-button/Button.Interface';
import { darkTheme, lightTheme } from '@/app/context/Theme/themes';
import { WIconButton } from '../../Icon-button/WButton.Icon';
import { NotificationsIcons } from '../../Notifications/Notifications.Icons';

interface NotificationsProps {
  mobile: boolean;
}

export function Notifications({ mobile }: NotificationsProps) {
  const auth = useAuth();
  const router = useRouter();
  const { themeName } = useAppThemeContext();
  const [openMenu, setOpenMenu] = useState<null | HTMLElement>(null);
  const [notifications, setNotifications] = useState<AllNotificationsProps[]>(
    []
  );

  const handlePush = (values: any) => {
    router.push(`/notifications?id=${values.id}`);
    setOpenMenu(null);
  };

  const isOpen = Boolean(openMenu);
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setOpenMenu(e.currentTarget);
  };

  const handleClose = (e: MouseEvent) => {
    const textMenu = e.currentTarget.textContent?.trim();
    textMenu === 'Sair' ? auth.logout() : setOpenMenu(null);
  };

  const numberMessages = notifications.length;

  return (
    <>
      <IconButtonTransitionProp
        id="basic-button"
        aria-controls={isOpen ? 'basic-menu' : undefined}
        aria-haspopup="dialog"
        aria-expanded={isOpen ? 'true' : undefined}
        onClick={handleClick}
      >
        <WStyledBadge
          badgeContent={numberMessages}
          color={themeName === 'light' ? 'warning' : 'primary'}
          max={99}
        >
          <NotificationsIcon
            sx={{
              fontSize: '1.5rem',
              color: mobile
                ? themeName === 'light'
                  ? lightTheme.palette.common.white
                  : darkTheme.palette.common.white
                : themeName === 'light'
                ? lightTheme.palette.info.main
                : darkTheme.palette.deepGrey.main,
            }}
          />
        </WStyledBadge>
      </IconButtonTransitionProp>
      <Menu
        id="basic-menu"
        anchorEl={openMenu}
        open={isOpen}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box sx={{ height: '21rem', width: '25rem' }}>
          <Box
            sx={{
              paddingX: '1rem',
              display: 'flex',
              flexDirection: 'row',
              cursor: 'default',
              maxWidth: { xs: '25rem', sm: '30rem' },
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: '.5rem',
            }}
          >
            <TypographyTitle
              fontSize="1rem"
              text="Notificações"
              fontWeight={500}
            />
            <Link href="/notifications" onClick={() => setOpenMenu(null)}>
              <WIconButton
                title="Ver notificações"
                icon={
                  <ClearAllRounded
                    sx={{
                      color:
                        themeName === 'light'
                          ? lightTheme.palette.deepGrey.light
                          : darkTheme.palette.deepGrey.light,
                    }}
                  />
                }
              />
            </Link>
          </Box>

          {notifications
            .slice(0, 5)
            ?.map((notification: AllNotificationsProps, index: number) => {
              return (
                <Box
                  key={index}
                  sx={{
                    bgcolor: notification.read
                      ? themeName == 'light'
                        ? lightTheme.palette.grey[200]
                        : darkTheme.palette.grey[600]
                      : '',
                  }}
                >
                  <Divider />

                  <MenuItem
                    onClick={() => {
                      handlePush(notification);
                    }}
                    sx={{
                      height: '3.5rem',
                      overflow: 'auto',
                      paddingX: '.75rem',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '0.875rem',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      color:
                        themeName === 'dark'
                          ? darkTheme.palette.text.primary
                          : lightTheme.palette.text.primary,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <ListItemIcon>
                        <NotificationsIcons notification={notification} />
                      </ListItemIcon>

                      <Box>
                        <TypographyTitle
                          fontSize="1rem"
                          fontWeight={500}
                          text={notification.title}
                          whiteSpace="nowrap"
                          maxWidth="14rem"
                          overflow="hidden"
                          textOverflow="ellipsis"
                        />

                        <Typography
                          sx={{
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '0.875rem',
                            lineHeight: '1rem',
                            maxWidth: '10rem',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {notification.message}
                        </Typography>
                      </Box>
                    </Box>
                    <TypographyText
                      fontSize="0.865rem"
                      fontWeight={500}
                      text={formatDistanceToNow(
                        new Date(notification.createdAt),
                        {
                          locale: ptBR,
                          addSuffix: true,
                        }
                      )}
                      color={
                        themeName === 'light'
                          ? lightTheme.palette.deepGrey.light
                          : darkTheme.palette.deepGrey.light
                      }
                    />
                  </MenuItem>
                </Box>
              );
            })}
        </Box>
      </Menu>
    </>
  );
}
