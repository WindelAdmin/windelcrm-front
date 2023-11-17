import { useContext } from 'react';
import { SnackBarContext } from '../context/Toast.context';

export const useSnackBar = () => {
  const context = useContext(SnackBarContext);
  return context;
};
