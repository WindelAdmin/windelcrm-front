import React, { MouseEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { ClearAllRounded } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { darkTheme, lightTheme } from '../../ThemeRegistry/theme';
import { useAppThemeContext } from '@/app/context/theme/useAppTheme';
import { useAuth } from '@/app/context/useAuth';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { WStyledBadge } from './Sidebar/StyleBadge';
import { TypographyTitle } from '../../Typography/Typography.Title/WTypography.Title';
import { TypographyText } from '../../Typography/Typography.Text/WTypography.Text';
import { fetchPageNotification } from '@/app/hooks/usePage/Hook.usePageNotification';
import { NotificationsIcons } from '../../Pages/Notifications/Notifications.Icons';
import { useRouter } from 'next/navigation';
import { AllNotificationsProps } from '../../Pages/Notifications/Notifications.Interface';
import { WIconButton } from '../../Button/WButton.Icon';
import { IconButtonTransitionProp } from '../../Button/Button.Interface';

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

  const { data: AnnouncementsData } = fetchPageNotification('avisos', {
    page: 1,
  });
  const { data: NotificationsData } = fetchPageNotification(
    '/notificacoes/findAllUnreadNotification',
    {
      page: 1,
    }
  );

  const handlePush = (values: any) => {
    router.push(`/notifications?id=${values.id}`);
    setOpenMenu(null);
  };

  useEffect(() => {
    const notificationsArray: any = [];
    if (AnnouncementsData) {
      AnnouncementsData.list
        .filter((not: any) => new Date(not.validade) >= new Date())
        .map((not: any) => {
          const option = {
            message: not.texto,
            createdAt: new Date(not.createdAt),
            title: not.assunto,
            id: not.id,
            expireDate: not.validade,
            urgent: not.urgente,
            type: 'announcement',
          };
          notificationsArray.push(option);
          return option;
        });
    }

    if (NotificationsData) {
      NotificationsData.list.map((not: any) => {
        const option = {
          message: not.textoNotificacao,
          createdAt: new Date(not.createdAt),
          title: not.titulo,
          id: not.id,
          type: 'notifications',
          read: not.lido,
          author: not.usuario?.name,
        };
        notificationsArray.push(option);
        return option;
      });
    }
    notificationsArray
      .sort((a: any, b: any) => {
        return a.createdAt?.getTime() - b.createdAt?.getTime();
      })
      .reverse();
    setNotifications(notificationsArray);
  }, [AnnouncementsData, NotificationsData]);

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
