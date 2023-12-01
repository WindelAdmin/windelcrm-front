import { createTheme } from '@mui/material/styles';
import { Quicksand } from 'next/font/google';

import {
  blue,
  blueGrey,
  common,
  grey,
  lightBlue,
  orange,
  red
} from '@mui/material/colors';

const quicksand = Quicksand({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    deepGrey: true;
    info: true;
  }
}

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: blue[700],
      light: blue[600],
      dark: blue[800],
      contrastText: common.white,
    },
    secondary: {
      main: blueGrey[700],
      light: blueGrey[400],
      dark: blueGrey[900],
      contrastText: common.white,
    },
    info: {
      main: lightBlue[800],
      light: lightBlue[700],
      dark: lightBlue[900],
      contrastText: common.white,
    },
    warning: {
      main: orange[800],
      light: orange[700],
      dark: orange[900],
      contrastText: common.white,
    },
    error: {
      main: red[700],
      light: red[600],
      dark: red[800],
      contrastText: common.white,
    },
    deepGrey: {
      main: grey[700],
      light: grey[600],
      dark: grey[800],
      contrastText: common.white,
    },
    common: {
      white: common.white,
      black: grey[900],
    },
    background: {
      default: '#f8f9fa',
      paper: grey[50],
    },
    text: {
      primary: grey[800],
      secondary: grey[700],
      disabled: grey[500],
    },
    action: {
      disabled: grey[400],
    },
  },
  typography: {
    fontFamily: quicksand.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          backgroundColor: grey[100],
          minWidth: '140px',
          overflowY: 'auto',
        },
        option: {
          backgroundColor: grey[100],
          ':hover': {
            backgroundColor: grey[200],
          },
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        inputProps: {
          style: {
            WebkitBoxShadow: '0 0 0 1000px #f8f9fa inset',
            WebkitTextFillColor: grey[800],
            WebkitBorderRadius: '8px',
          },
        },
      },
      styleOverrides: {
        root: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: grey[500],
          },
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
        },
        notchedOutline: {
          border: 'solid 1px',
          borderColor: grey[500],
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: grey[700],
          '&.Mui-error': {
            color: grey[700],
            '&.Mui-error': {
              color: grey[700],
            },
            '&.Mui-focused': {
              color: grey[700],
            },
          },
          '&.Mui-focused': {
            color: grey[700],
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          ':after': {
            borderColor: `${grey[700]} !important`,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: '0px',
          color: red[700],
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        track: {
          '.Mui-checked.Mui-checked + &': {
            backgroundColor: lightBlue[700],
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          marginBottom: 2,
          backgroundColor: lightBlue[500],
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: grey[800],
          letterSpacing: '0.025rem',
          fontSize: '1.1rem',
          textTransform: 'none',
          fontWeight: 600,
          '&.Mui-selected': {
            color: grey[800],
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          '&::-webkit-scrollbar': {
            width: '5px',
            height: '5px',
          },
          '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 3px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 3px rgba(0,0,0,0.00)',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: blue[900],
            borderRadius: '8px',
          },
        },
      },
    },
      MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          '&:hover': {
            backgroundColor: grey[200]
          }
        }
      }
    },
    MuiListItemText: {
      defaultProps: {
        primaryTypographyProps: {
          color: grey[900]
        },
        secondaryTypographyProps: {
          color: grey[600]
        },
      }
    }
  },
});
