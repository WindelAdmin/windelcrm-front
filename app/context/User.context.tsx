'use client';

import { decrypt } from '@/services/CryptoService/crypto.service';
import { parseCookies } from 'nookies';
import { ReactNode, createContext, useEffect, useState } from 'react';

export const UserContext = createContext({});

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

export interface UserProps {
  email?: string;
  token?: string;
  userNotFound: boolean;
  hasAuthError: boolean;
  userUnauthorized: boolean;
  enterpriseInfo: string;
}

export function UserProvider({ children }: UserProviderContextProps) {
  const [infoUser, setInfoUser] = useState<UserProviderProps | null>();

  useEffect(() => {
    const { 'nextauth.user': userCookies } = parseCookies();
    if (userCookies) {
      async () => {
        const decrypted = await decrypt(userCookies)
        console.log("decript",decrypted);
        
        setInfoUser(JSON.parse(decrypted));
      }
      
    }
  }, []);

  return (
    <UserContext.Provider value={{ infoUser }}>{children}</UserContext.Provider>
  );
}
