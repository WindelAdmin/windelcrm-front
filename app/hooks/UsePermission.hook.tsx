import { useContext } from 'react';
import { PermissionContext } from '../context/Permission.context';

export const useAuth = () => {
  const context = useContext(PermissionContext);
  return context;
};
