'use client';
import { Box, Divider, ListItemIcon, Typography } from '@mui/material';
import { MessagesNotifications } from '../../Layout/Header/Notifications/messages';
import Link from 'next/link';
import {
  ErrorRounded,
  NotificationsActiveOutlined,
  PaidRounded,
} from '@mui/icons-material';
import { lightTheme } from '../../ThemeRegistry/lightTheme';
import { TypographyTitle } from '../../Typography/Typography.Title/WTypography.Title';
import { TypographyText } from '../../Typography/Typography.Text/WTypography.Text';
import { formatDistanceToNow } from 'date-fns';
import { darkTheme } from '../../ThemeRegistry/darkTheme';
import { useAppThemeContext } from '@/app/context/theme/useAppTheme';
import { ptBR } from 'date-fns/locale';
import { PageContainer } from '../PageContainer/Page.Container';
import { WBreadcrumbs } from '../../Breadcrumbs/WBreadcrumbs';

export function NotificationsDetails() {
  const { themeName } = useAppThemeContext();

  return (
    <PageContainer>
      <WBreadcrumbs father="Central de Notificações" />
      {MessagesNotifications.map((msg) => (
        <Box key={msg.id}>
          <Link
            href={`/notifications/${msg.id}`}
            passHref
            style={{ textDecoration: 'none' }}
          >
            <Divider />

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ListItemIcon>
                {msg.message === 'Aviso' ? (
                  <NotificationsActiveOutlined
                    fontSize="medium"
                    sx={{
                      color: lightTheme.palette.info.light,
                    }}
                  />
                ) : msg.message === 'Windel' ? (
                  <ErrorRounded
                    fontSize="medium"
                    sx={{
                      color: lightTheme.palette.info.light,
                    }}
                  />
                ) : (
                  <PaidRounded
                    fontSize="medium"
                    sx={{
                      color:
                        msg.type === 1
                          ? lightTheme.palette.success.light
                          : lightTheme.palette.error.light,
                    }}
                  />
                )}
              </ListItemIcon>

              <Box>
                <TypographyTitle
                  fontSize="1.2rem"
                  fontWeight={500}
                  text={msg.message}
                />

                <Typography
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '0.9rem',
                    lineHeight: '1rem',
                    maxWidth: '20rem',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {msg.bodyMessage}
                </Typography>
              </Box>
            </Box>
            <TypographyText
              fontSize="0.675rem"
              fontWeight={500}
              text={formatDistanceToNow(msg.date, {
                locale: ptBR,
                addSuffix: true,
              })}
              color={
                themeName === 'light'
                  ? lightTheme.palette.deepGrey.light
                  : darkTheme.palette.deepGrey.light
              }
            />
          </Link>
        </Box>
      ))}
    </PageContainer>
  );
}
