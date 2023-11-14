import { InterfaceDefaultProps } from '@/app/interface/Interface.Default';
import { AllNotificationsProps } from '../Notifications.Interface';

export interface ModalAnnouncemetsProps {
  isOpen: boolean;
  closeModal: () => void;
  refetch: any;
  record?: AllNotificationsProps | undefined;
}

export interface AnnouncementsProps {
  id: number;
  createdAt: Date;
  validade: string | Date;
  usuarioId?: number;
  empresaId?: number;
  urgente: boolean;
  assunto: string;
  texto: string;
}
