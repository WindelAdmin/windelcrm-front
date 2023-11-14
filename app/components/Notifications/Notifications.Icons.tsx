import React from 'react';
import {
  ErrorRounded,
  NotificationsActiveOutlined,
  PaidRounded,
} from '@mui/icons-material';
import { NotificationsIconsProps } from './Notifications.Interface';

export function NotificationsIcons({ notification }: NotificationsIconsProps) {
  return (
    <>
      {notification?.type === 'announcement' ? (
        // notification.read ? (
        //   <NotificationsOutlined fontSize='medium' color='disabled' />
        // ) : (
        <NotificationsActiveOutlined
          fontSize='medium'
          color={notification.urgent ? 'error' : 'info'}
        />
      ) : // )
      notification?.type === 'notification' ? (
        <ErrorRounded
          fontSize='medium'
          color={notification.read ? 'disabled' : 'info'}
        />
      ) : (
        <PaidRounded
          fontSize='medium'
          color={
            notification.read
              ? 'disabled'
              : notification?.type === 1
              ? 'success'
              : 'error'
          }
        />
      )}
    </>
  );
}
