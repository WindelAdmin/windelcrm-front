'use client';

import { decrypt } from '@services/CryptoService/crypto.service';
import { CookiesEnum } from '@shared/cookies/Cookies.enum';
import { parseCookies } from 'nookies';
import { ReactNode, createContext, useEffect, useState } from 'react';

export const UserContext = createContext({});

export interface UserProviderProps {
  id: string;
  name: string;
  email: string;
  permissions: {
    id: number;
    code: string;
    description: string;
    type: string;
  }[];
}

export interface UserProviderContextProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderContextProps) {
  const [infoUser, setInfoUser] = useState<UserProviderProps | null>();

  useEffect(() => {
    const { [CookiesEnum.windelcrmUser]: userCookies } = parseCookies();
    if (userCookies) {
      async () => {
        const decrypted = await decrypt(userCookies);
        const { userData } = JSON.parse(decrypted)
        setInfoUser(userData);
      };
    }
  }, []);

  return (
    <UserContext.Provider value={{ infoUser }}>{children}</UserContext.Provider>
  );
}
