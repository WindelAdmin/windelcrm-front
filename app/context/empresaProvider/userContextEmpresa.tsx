'use client';
import { createContext, useEffect, useState } from 'react';
import { EmpresaProviderContextProps, EmpresaProviderProps } from './interface';
import { parseCookies } from 'nookies';
import { DecryptWithAES } from '@/app/utils/Functions/Crypto';

export const EmpresaContext = createContext({});

export function EmpresaProvider({ children }: EmpresaProviderContextProps) {
  const [infoEmpresa, setInfoEmpresa] = useState<EmpresaProviderProps | null>();

  useEffect(() => {
    const { 'nextauth.user': userCookies } = parseCookies();
    if (userCookies) {
      const decrypt = DecryptWithAES(userCookies);
      const { empresa } = JSON.parse(decrypt);
      setInfoEmpresa(empresa);
    }
  }, []);

  return (
    <EmpresaContext.Provider value={{ infoEmpresa }}>
      {children}
    </EmpresaContext.Provider>
  );
}
