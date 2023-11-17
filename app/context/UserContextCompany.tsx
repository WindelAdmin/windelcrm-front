'use client';
import { decrypt } from '@/services/CryptoService/crypto.service';
import { parseCookies } from 'nookies';
import { ReactNode, createContext, useCallback, useState } from 'react';
import { CompanyProviderProps } from '../hooks/UseInfoCompany.hook';

export interface CompanyProviderContextProps {
  children: ReactNode
}
 
export const CompanyContext = createContext({});

export function CompanyProvider({ children }: CompanyProviderContextProps) {
  const [infoCompany, setInfoCompany] = useState<CompanyProviderProps | null>();

useCallback(async () => {
     const { 'nextauth.user': userCookies } = parseCookies();
     if (userCookies) {
      const decrypted = await decrypt(userCookies)
      const { company } = JSON.parse(decrypted);
      setInfoCompany(company);
    }
  }, [])

  return (
    <CompanyContext.Provider value={{ infoCompany }}>
      {children}
    </CompanyContext.Provider>
  );
}
