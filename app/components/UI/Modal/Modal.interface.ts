import { DialogProps } from '@mui/material';
import { ReactElement, ReactNode } from 'react';

export interface WModalProps extends DialogProps {
  open: boolean;
  onClose: () => void;
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
