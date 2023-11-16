'use client';
import { createContext, useEffect, useState } from 'react';
import { EmpresaProviderContextProps, EmpresaProviderProps } from './interface';
import { parseCookies } from 'nookies';
import { decrypt } from '@/services/CryptoService/crypto.service';


export const EmpresaContext = createContext({});

export function EmpresaProvider({ children }: EmpresaProviderContextProps) {
  const [infoEmpresa, setInfoEmpresa] = useState<EmpresaProviderProps | null>();

  useEffect(() => {
    const { 'nextauth.user': userCookies } = parseCookies();
    if (userCookies) {
      const decrypted = decrypt(userCookies);
      const { empresa } = JSON.parse(decrypted);
      setInfoEmpresa(empresa);
    }
  }, []);

  return (
    <EmpresaContext.Provider value={{ infoEmpresa }}>
      {children}
    </EmpresaContext.Provider>
  );
}
