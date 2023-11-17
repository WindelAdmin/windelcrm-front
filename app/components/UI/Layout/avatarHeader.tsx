import {
  Box,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography
} from '@mui/material';
import { MouseEvent, useState } from 'react';

import { DarkTheme } from '@/app/context/ThemeContext/Themes/DarkTheme';
import { LightTheme } from '@/app/context/ThemeContext/Themes/LightTheme';
import { useAppThemeContext } from '@/app/hooks/UseAppTheme.hook';
import { useAuth } from '@/app/hooks/UseAuth.hook';
import { useInfoUser } from '@/app/hooks/UseInfoUser.hook';
import { AccountCircle, Logout, ManageAccounts } from '@mui/icons-material';
import Link from 'next/link';
import { IconButtonTransitionProps } from '../Button/Button.Interface';
import { WStyledBadge } from './Header/Sidebar/StyleBadge';

export function AppBarAvatar() {
  const user = useInfoUser();
  const auth = useAuth();
  const { themeName } = useAppThemeContext();
  const [openMenu, setOpenMenu] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(openMenu);
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setOpenMenu(e.currentTarget);
  };

  const handleClose = (e: MouseEvent) => {
    const textMenu = e.currentTarget.textContent?.trim();
    textMenu === 'Sair' ? auth.logout() : setOpenMenu(null);
  };

  return (
    <>
      <IconButtonTransitionProps
        id="basic-button"
        aria-controls={isOpen ? 'basic-menu' : undefined}
        aria-haspopup="dialog"
        aria-expanded={isOpen ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          textTransform: 'none',
          fontStyle: 'normal',
          fontWeight: 400,
          backgroundColor: 'inherit',
        }}
      >
      </IconButtonTransitionProps>
      <Menu
        id="basic-menu"
        anchorEl={openMenu}
        open={isOpen}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem
          sx={{
            mb: '1rem',
            cursor: 'default',
          }}
        >
          <WStyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
          </WStyledBadge>
          <Box paddingX="1rem">
            <Typography
              sx={{
                letterSpacing: '0.025rem',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '1rem',
              }}
            >
              {user?.name}
            </Typography>
            <Typography
              color="#b8b7bc"
              sx={{
                letterSpacing: '0.025rem',
                fontStyle: 'normal',
                fontSize: '0.875rem',
              }}
            >
            </Typography>
          </Box>
        </MenuItem>
        <Link href="/profile" passHref style={{ textDecoration: 'none' }}>
          <MenuItem
            onClick={handleClose}
            sx={{
              letterSpacing: '0.025rem',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '0.875rem',
              color:
                themeName === 'dark'
                  ? DarkTheme.palette.text.primary
                  : LightTheme.palette.text.primary,
            }}
          >
            <ListItemIcon>
              <AccountCircle
                fontSize="small"
                sx={{
                  color:
                    themeName === 'light'
                      ? LightTheme.palette.info.main
                      : LightTheme.palette.common.white,
                }}
              />
            </ListItemIcon>
            Perfil
          </MenuItem>
        </Link>
        <Link href="/roles" passHref style={{ textDecoration: 'none' }}>
          <MenuItem
            onClick={handleClose}
            sx={{
              letterSpacing: '0.025rem',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '0.875rem',
              color:
                themeName === 'dark'
                  ? DarkTheme.palette.text.primary
                  : LightTheme.palette.text.primary,
            }}
          >
            <ListItemIcon>
              <ManageAccounts
                fontSize="small"
                sx={{
                  color:
                    themeName === 'light'
                      ? LightTheme.palette.info.main
                      : LightTheme.palette.common.white,
                }}
              />
            </ListItemIcon>
            Regras e Permissões
          </MenuItem>
        </Link>
        <Divider />
        <MenuItem
          onClick={handleClose}
          sx={{
            letterSpacing: '0.025rem',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '0.875rem',
          }}
        >
          <ListItemIcon>
            <Logout
              fontSize="small"
              sx={{
                color:
                  themeName === 'light'
                    ? LightTheme.palette.info.main
                    : LightTheme.palette.common.white,
              }}
            />
          </ListItemIcon>
          Sair
        </MenuItem>
      </Menu>
    </>
  );
}
