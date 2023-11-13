import { ReactNode } from 'react';

export interface UserProps {
  email?: string;
  token?: string;
  expiredTest: boolean;
  userNotFound: boolean;
  hasAuthError: boolean;
  userUnauthorized: boolean;
  userMaxNumber: boolean;
  enterpriseInfo: string;
  regPerPage: number;
}

export interface ContextProps extends UserProps {
  authenticate: (
    email: string,
    password: string,
    setBackdrop: any,
    backdrop: boolean
  ) => Promise<void>;
  logout: () => void;
  closeExpiredTestModal: () => void;
  closeUserNotFoundModal: () => void;
  closeHasAuthErrorModal: () => void;
  closeUserUnauthorizedModal: () => void;
  closeUserMaxNumber: () => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}
