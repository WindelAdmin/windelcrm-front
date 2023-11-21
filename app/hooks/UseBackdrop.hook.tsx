import { useContext } from 'react';
import { BackdropContext } from '../context/Backdrop.context';

export const useBackdrop = () => {
  const context =  useContext(BackdropContext);
  return context
};