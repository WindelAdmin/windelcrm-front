'use client';
import { createContext, useEffect, useState } from 'react';
import { UserProviderContextProps, UserProviderProps } from './interface';
import { parseCookies } from 'nookies';
import { DecryptWithAES } from '@/app/utils/Functions/Crypto';

export const UserContext = createContext({});

export function UserProvider({ children }: UserProviderContextProps) {
  const [infoUser, setInfoUser] = useState<UserProviderProps | null>();

  useEffect(() => {
    const { 'nextauth.user': userCookies } = parseCookies();
    if (userCookies) {
      const decrypt = DecryptWithAES(userCookies);
      setInfoUser(JSON.parse(decrypt));
    }
  }, []);

  return (
    <UserContext.Provider value={{ infoUser }}>{children}</UserContext.Provider>
  );
}
