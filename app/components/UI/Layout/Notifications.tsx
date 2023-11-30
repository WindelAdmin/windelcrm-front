import { ClearAllRounded } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
  Box,
  Menu
} from '@mui/material';
import Link from 'next/link';
import { MouseEvent, useState } from 'react';

import { DarkTheme } from '@/app/context/ThemeContext/Themes/DarkTheme';
import { LightTheme } from '@/app/context/ThemeContext/Themes/LightTheme';
import { useAppThemeContext } from '@/app/hooks/UseAppTheme.hook';
import { useAuth } from '@/app/hooks/UseAuth.hook';
import { useRouter } from 'next/navigation';
import { IconButtonTransitionProps } from '../Button/Button.Interface';
import { WIconButton } from '../IconButton/WButton.Icon';
import { TypographyTitle } from '../Typography/Typography.Title/WTypography.Title';
import { WStyledBadge } from './Header/Sidebar/StyleBadge';


interface NotificationsProps {
  mobile: boolean;
}

export function Notifications({ mobile }: NotificationsProps) {
  const auth = useAuth();
  const router = useRouter();
  const { themeName } = useAppThemeContext();
  const [openMenu, setOpenMenu] = useState<null | HTMLElement>(null);
  const [notifications, setNotifications] = useState<[]>(
    []
  );

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
      <IconButtonTransitionProps
        id='basic-button'
        aria-controls={isOpen ? 'basic-menu' : undefined}
        aria-haspopup='dialog'
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
                  ? LightTheme.palette.common.white
                  : DarkTheme.palette.common.white
                : themeName === 'light'
                ? LightTheme.palette.info.main
                : DarkTheme.palette.deepGrey.main,
            }}
          />
        </WStyledBadge>
      </IconButtonTransitionProps>
      <Menu
        id='basic-menu'
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
              fontSize='1rem'
              text='Notificações'
              fontWeight={500}
            />
            <Link href='/notifications' onClick={() => setOpenMenu(null)}>
              <WIconButton
                title='Ver notificações'
                icon={
                  <ClearAllRounded
                    sx={{
                      color:
                        themeName === 'light'
                          ? LightTheme.palette.deepGrey.light
                          : DarkTheme.palette.deepGrey.light,
                    }}
                  />
                }
              />
            </Link>
          </Box>

            
        </Box>
      </Menu>
    </>
  );
}
