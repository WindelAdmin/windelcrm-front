import { useContext } from 'react';
import { SnackBarContext } from './toastContext';

export const useSnackBar = () => {
  const context = useContext(SnackBarContext);
  return context;
};
