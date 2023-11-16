/* eslint-disable react-hooks/rules-of-hooks */
import { darkTheme, lightTheme } from '@/app/context/ThemeContext/themes';
import { useAppThemeContext } from '@/app/context/ThemeContext/useAppThemeContext';
import { useToggleDrawer } from '@/app/context/ToggleDrawer/useToggleDrawer';
import { FirstPageRounded, LastPageRounded } from '@mui/icons-material';
import IconButtonMui from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

export function ToggleDrawerOpen() {
  const { open, toggleDrawer } = useToggleDrawer();
  const { themeName } = useAppThemeContext();

  const IconButton = styled(IconButtonMui, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme }) => {
    return {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      ...(!open && {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }),
    };
  });
  return (
    <IconButton
      aria-label="open drawer"
      onClick={toggleDrawer}
      sx={{
        display: { xs: 'none', sm: 'none', md: 'flex' },
        backgroundColor:
          themeName === 'light'
            ? lightTheme.palette.info.main
            : darkTheme.palette.common.black,
        color: '#fff',
        ':hover': {
          color: '#fff',
          backgroundColor:
            themeName === 'light'
              ? lightTheme.palette.info.main
              : darkTheme.palette.common.black,
        },
        ml: '-2.6rem',
        mr: '2rem',
      }}
    >
      {open ? (
        <FirstPageRounded
          fontSize="small"
          titleAccess="Fechar menu"
          sx={{ width: '1rem', height: '1rem' }}
        />
      ) : (
        <LastPageRounded
          fontSize="small"
          titleAccess="Abrir menu"
          sx={{ width: '1rem', height: '1rem' }}
        />
      )}
    </IconButton>
  );
}
