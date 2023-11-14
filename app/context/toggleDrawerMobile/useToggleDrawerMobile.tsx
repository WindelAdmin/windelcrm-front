import { useContext } from 'react';
import { ToggleDrawerMobileContext } from './toggleDrawerMobileContext';

export const useToggleDrawerMobile = () => {
  const context = useContext(ToggleDrawerMobileContext);
  return context;
};
