'use client';

import { decrypt } from '@/services/CryptoService/crypto.service';
import { parseCookies } from 'nookies';
import { createContext, useEffect, useState } from 'react';
import { UserProviderContextProps, UserProviderProps } from './interface';

export const UserContext = createContext({});

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
