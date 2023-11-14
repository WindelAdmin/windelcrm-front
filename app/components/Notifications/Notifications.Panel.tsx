import {
  Box,
  Divider,
  ListItemIcon,
  MenuItem,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { GridContainer } from '../../Grid/GridContainer';
import { useAppThemeContext } from '@/app/context/theme/useAppTheme';
import { darkTheme } from '../../ThemeRegistry/darkTheme';
import { lightTheme } from '../../ThemeRegistry/lightTheme';
import { TypographyTitle } from '../../Typography/Typography.Title/WTypography.Title';
import { TypographyText } from '../../Typography/Typography.Text/WTypography.Text';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { NotificationsIcons } from './Notifications.Icons';
import { GridItemNotifications } from './Notification.GridItem';
import {
  AllNotificationsProps,
  NotificationsPanelProps,
} from './Notifications.Interface';
import { WButtonDelete } from '../../Button/WButton.Delete';
import { WButtonEdit } from '../../Button/wButton.Edit';

export const NotificationsPanel = ({
  notifications,
  handleEditAnnouncement,
  handleDeleteAnnouncement,
  selectedId,
  handleMenuItemClick,
}: NotificationsPanelProps) => {
  const { themeName } = useAppThemeContext();
  const resolution = useMediaQuery('(min-height:900px)');
  const resolution768 = useMediaQuery('(max-height:768px)');

  return (
    <GridContainer>
      <GridItemNotifications md={4} sm={12}>
        {notifications.map(
          (notification: AllNotificationsProps, key: number) => (
            <Box
              key={key}
              bgcolor={
                selectedId == notification?.id
                  ? themeName === 'dark'
                    ? darkTheme.palette.background.paper
                    : lightTheme.palette.grey[200]
                  : ''
              }
            >
              <MenuItem
                sx={{
                  height: '4.5rem',
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
                onClick={() => handleMenuItemClick(notification)}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <ListItemIcon>
                    <NotificationsIcons notification={notification} />
                  </ListItemIcon>
                  <Box>
                    <TypographyTitle
                      fontSize='1.2rem'
                      fontWeight={500}
                      text={notification?.title}
                    />

                    <Typography
                      sx={{
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '0.9rem',
                        lineHeight: '1rem',
                        maxWidth: '14rem',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {notification?.message}
                    </Typography>
                  </Box>
                </Box>
                <TypographyText
                  fontSize='0.675rem'
                  fontWeight={500}
                  text={
                    notification?.createdAt &&
                    formatDistanceToNow(notification?.createdAt, {
                      locale: ptBR,
                      addSuffix: true,
                    })
                  }
                  color={
                    themeName === 'light'
                      ? lightTheme.palette.deepGrey.light
                      : darkTheme.palette.deepGrey.light
                  }
                />
              </MenuItem>
              <Divider />
            </Box>
          )
        )}
      </GridItemNotifications>
      <GridItemNotifications md={8} sm={12}>
        {notifications.map((notification: any, idx: any) => (
          <Box key={idx}>
            {selectedId === notification?.id && (
              <Stack padding='1rem'>
                {notification.type === 'announcement' && (
                  <Stack direction='row' justifyContent='end' gap='.5rem'>
                    {handleEditAnnouncement && (
                      <WButtonEdit
                        onClick={() => handleEditAnnouncement(notification)}
                      />
                    )}
                    {handleDeleteAnnouncement && (
                      <WButtonDelete
                        onClick={() => handleDeleteAnnouncement(notification)}
                      />
                    )}
                  </Stack>
                )}
                <Stack
                  direction='row'
                  justifyContent='space-between'
                  marginTop={
                    notification.type == 'announcement' ? '1rem' : '3.125rem'
                  }
                >
                  <TypographyTitle
                    fontSize='1.2rem'
                    fontWeight={500}
                    text={`Enviado por ${notification?.author}`}
                  />
                  <TypographyText
                    textAlign='right'
                    fontSize='1rem'
                    fontWeight={500}
                    text={`Enviado em ${format(
                      new Date(
                        notification ? notification?.createdAt : new Date()
                      ),
                      `PPpp`,
                      { locale: ptBR }
                    )}`}
                    color={
                      themeName === 'light'
                        ? lightTheme.palette.deepGrey.light
                        : darkTheme.palette.deepGrey.light
                    }
                  />
                </Stack>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <NotificationsIcons notification={notification} />
                  <TypographyTitle
                    marginLeft='.5rem'
                    fontSize='1.6rem'
                    fontWeight={500}
                    text={notification.title}
                  />
                </Box>
                <Box>
                  <TypographyText
                    padding='.5rem'
                    textAlign='left'
                    fontSize='1rem'
                    fontWeight={500}
                    text={notification.message}
                  />
                </Box>
              </Stack>
            )}
          </Box>
        ))}
      </GridItemNotifications>
    </GridContainer>
  );
};
