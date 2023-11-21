import {
  blueGrey,
  common,
  deepPurple,
  grey,
  lightBlue,
  orange,
  red
} from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { Quicksand } from 'next/font/google';

declare module '@mui/material/styles' {
  interface Palette {
    deepGrey: Palette['primary'];
  }

  interface PaletteOptions {
    deepGrey?: PaletteOptions['primary'];
  }
}

// Update the Button's color options to include an deepGrey option
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    deepGrey: true;
  }
}

declare module '@mui/material/FormControl' {
  interface FormControlPropsColorOverrides {
    deepGrey: true;
  }
}
declare module '@mui/material/InputBase' {
  interface InputBasePropsColorOverrides {
    deepGrey: true;
  }
}
declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    deepGrey: true;
    info: true;
  }
}

const quicksand = Quicksand({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});
export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: deepPurple[600],
      light: deepPurple[500],
      dark: deepPurple[700],
      contrastText: common.white,
    },
    secondary: {
      main: blueGrey[500],
      light: blueGrey[400],
      dark: blueGrey[600],
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
    common: {
      black: grey[900],
    },
    error: {
      main: red[700],
      light: red[600],
      dark: red[800],
      contrastText: common.white,
    },
    deepGrey: {
      main: grey[200],
      light: grey[50],
      dark: grey[300],
      contrastText: common.black,
    },
    background: {
      default: grey[800],
      paper: grey[700],
    },
    text: {
      primary: grey[100],
      secondary: grey[800],
    },
    action: {
      disabled: grey[600],
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
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: grey[200],
          '&.Mui-focused': {
            color: grey[200],
          },
          '&.Mui-error': {
            color: grey[200],
          },
        },
      },
    },
    MuiInputBase: {
      defaultProps: {
        inputProps: {
          style: {
            WebkitBoxShadow: `0 0 0 1000px ${grey[900]} inset`,
            WebkitTextFillColor: grey[100],
          },
        },
      },
      styleOverrides: {
        root: {
          ':after': {
            borderColor: `${grey[200]} !important`,
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: grey[200],
          '&.Mui-error': {
            color: grey[200],
          },
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        inputProps: {
          style: {
            WebkitBoxShadow: `0 0 0 1000px ${grey[800]} inset`,
            WebkitTextFillColor: grey[100],
            WebkitBorderRadius: '8px',
          },
        },
      },
      styleOverrides: {
        root: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: grey[500],
          },
          backgroundColor: grey[800],
          borderRadius: '8px',
        },
        notchedOutline: {
          border: 'solid 1px',
          borderColor: grey[500],
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          minWidth: '140px',
          overflowY: 'auto',
        },
        clearIndicator: {
          color: grey[200],
        },
        popupIndicator: {
          color: grey[200],
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: red[700],
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiDayCalendar-weekDayLabel': {
            color: grey[100],
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: grey[50],
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        track: {
          backgroundColor: grey[50],
          '.Mui-checked.Mui-checked + &': {
            backgroundColor: deepPurple[400],
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          marginBottom: 2,
          backgroundColor: deepPurple[500],
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: grey[100],
          letterSpacing: '0.025rem',
          fontSize: '1.1rem',
          textTransform: 'none',
          fontWeight: 600,
          '&.Mui-selected': {
            color: grey[100],
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
            backgroundColor: grey[50],
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
            backgroundColor: grey[800]
          }
        }
      }
    },
    MuiListItemText: {
      defaultProps: {
        primaryTypographyProps: {
          color: grey[100]
        },
        secondaryTypographyProps: {
          color: grey[400]
        },
      }
    }
  },
});
