export interface AllNotificationsProps {
  createdAt: Date;
  message: string;
  title: string;
  id: number;
  type: 'notification' | 'announcement' | any;
  expireDate?: any;
  urgent?: boolean;
  read?: boolean;
}

export interface NotificationsPanelProps {
  notifications: AllNotificationsProps[];
  handleEditAnnouncement?: (val: any) => void;
  handleDeleteAnnouncement?: (val: any) => void;
  selectedId?: number;
  handleMenuItemClick: (rec: AllNotificationsProps) => void;
}

export interface NotificationsIconsProps {
  notification: AllNotificationsProps;
}
