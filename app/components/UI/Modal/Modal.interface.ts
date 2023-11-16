import { ReactElement, ReactNode } from 'react';
import { DialogProps } from '@mui/material';

export interface WModalProps extends DialogProps {
  open: boolean;
  icon?: ReactElement;
  title: string;
  children: ReactNode;
  width?: string;
}

export interface ModalDeleteProps {
  modalOpen: boolean;
  onClose: () => void;
  name?: string;
  id?: number | string;
  routerAPI?: string;
  refetch: any;
}
