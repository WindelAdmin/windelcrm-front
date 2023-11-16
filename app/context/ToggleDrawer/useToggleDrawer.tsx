import { useContext } from 'react';
import { ToggleDrawerContext } from './toggleDrawerContext';

export const useToggleDrawer = () => {
  const context = useContext(ToggleDrawerContext);
  return context;
};
