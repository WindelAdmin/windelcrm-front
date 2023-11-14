import React, { useState, MouseEvent } from 'react';
import {
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';

import { AccountCircle, Logout, ManageAccounts } from '@mui/icons-material';
import Link from 'next/link';



import { useInfoUser } from '@/app/context/userProvider/useInfoUser';
import { WStyledBadge } from './Sidebar/StyleBadge';
import { useAuth } from '@/app/context/userProvider/useAuth';
import { useAppThemeContext } from '@/app/context/Theme/useAppThemeContext';
import { IconButtonTransitionProp } from '../../Icon-button/Button.Interface';
import { WAvatar } from '../../Avatar/WAvatar';
import { darkTheme, lightTheme } from '@/app/context/Theme/themes';



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
      <IconButtonTransitionProp
        id='basic-button'
        aria-controls={isOpen ? 'basic-menu' : undefined}
        aria-haspopup='dialog'
        aria-expanded={isOpen ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          textTransform: 'none',
          fontStyle: 'normal',
          fontWeight: 400,
          backgroundColor: 'inherit',
        }}
      >
        <WAvatar size={30} />
      </IconButtonTransitionProp>
      <Menu
        id='basic-menu'
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
            overlap='circular'
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant='dot'
          >
            <WAvatar size={45} />
          </WStyledBadge>
          <Box paddingX='1rem'>
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
              color='#b8b7bc'
              sx={{
                letterSpacing: '0.025rem',
                fontStyle: 'normal',
                fontSize: '0.875rem',
              }}
            >
              {user?.administrador ? 'Admin' : 'Usuário'}
            </Typography>
          </Box>
        </MenuItem>
        <Link href='/profile' passHref style={{ textDecoration: 'none' }}>
          <MenuItem
            onClick={handleClose}
            sx={{
              letterSpacing: '0.025rem',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '0.875rem',
              color:
                themeName === 'dark'
                  ? darkTheme.palette.text.primary
                  : lightTheme.palette.text.primary,
            }}
          >
            <ListItemIcon>
              <AccountCircle
                fontSize='small'
                sx={{
                  color:
                    themeName === 'light'
                      ? lightTheme.palette.info.main
                      : lightTheme.palette.common.white,
                }}
              />
            </ListItemIcon>
            Perfil
          </MenuItem>
        </Link>
        <Link href='/roles' passHref style={{ textDecoration: 'none' }}>
          <MenuItem
            onClick={handleClose}
            sx={{
              letterSpacing: '0.025rem',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '0.875rem',
              color:
                themeName === 'dark'
                  ? darkTheme.palette.text.primary
                  : lightTheme.palette.text.primary,
            }}
          >
            <ListItemIcon>
              <ManageAccounts
                fontSize='small'
                sx={{
                  color:
                    themeName === 'light'
                      ? lightTheme.palette.info.main
                      : lightTheme.palette.common.white,
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
              fontSize='small'
              sx={{
                color:
                  themeName === 'light'
                    ? lightTheme.palette.info.main
                    : lightTheme.palette.common.white,
              }}
            />
          </ListItemIcon>
          Sair
        </MenuItem>
      </Menu>
    </>
  );
}
