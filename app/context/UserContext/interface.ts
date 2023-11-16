import { ReactNode } from 'react'

export interface UserProviderProps {
  id: string
  email: string
  companyId: number
  name: string,
  permissions: {id: number, code: string, description: string, type: string}[]
  
}

export interface UserProviderContextProps {
  children: ReactNode
}

export interface InfoUserProps {
  infoUser?: UserProviderProps
}
export interface UserProps {
  email?: string;
  token?: string;
  userNotFound: boolean;
  hasAuthError: boolean;
  userUnauthorized: boolean;
  enterpriseInfo: string;
}

export interface ContextProps extends UserProps {
  authenticate: (
    email: string,
    password: string,
    setBackdrop: any,
    backdrop: boolean
  ) => Promise<void>;
  logout: () => void;
  closeUserNotFoundModal: () => void;
  closeHasAuthErrorModal: () => void;
  closeUserUnauthorizedModal: () => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}
