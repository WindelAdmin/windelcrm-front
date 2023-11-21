'use client';
import { parseCookies } from 'nookies';
import {
  ReactNode,
  createContext,
  useEffect,
  useState
} from 'react';
import { CompanyProviderProps } from '../hooks/UseInfoCompany.hook';
import { decrypt } from '../services/CryptoService/crypto.service';
import { CookiesEnum } from '../shared/cookies/Cookies.enum';

export interface CompanyProviderContextProps {
  children: ReactNode;
}

export const CompanyContext = createContext({});

export function CompanyProvider({ children }: CompanyProviderContextProps) {
  const [infoCompany, setInfoCompany] = useState<CompanyProviderProps | null>();

  useEffect(() => {
    const { [CookiesEnum.windelcrmUser]: userCookies } = parseCookies();
    if (userCookies) {
      decrypt(userCookies).then((decrypted) => {
        const { companyData } = JSON.parse(decrypted);
        setInfoCompany(companyData);
      });
    }
  }, []);

  return (
    <CompanyContext.Provider value={{ infoCompany }}>
      {children}
    </CompanyContext.Provider>
  );
}
