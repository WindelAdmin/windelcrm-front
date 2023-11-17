import { useContext } from 'react';
import { ToggleDrawerMobileContext } from '../context/ToggleDrawerMobile.context';

export const useToggleDrawerMobile = () => {
  const context = useContext(ToggleDrawerMobileContext);
  return context;
};
