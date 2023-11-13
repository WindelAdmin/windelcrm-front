import { AlertColor, Color } from '@mui/material';

export interface SnackBarContextProviderProps {
  children: React.ReactNode;
}

export interface SnackBarContextActions {
  showSnackBar: (
    title: string,
    text: string,
    typeColor: 'success' | 'error' | 'info' | 'warning'
  ) => void;
}
