import { useContext } from 'react';
import { SnackBarContext } from './Toast.context';

export const useSnackBar = () => {
  const context = useContext(SnackBarContext);
  return context;
};
