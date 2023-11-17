import { useContext } from 'react';
import { ToggleDrawerContext } from '../context/ToggleDrawer.context';

export const useToggleDrawer = () => {
  const context = useContext(ToggleDrawerContext);
  return context;
};
