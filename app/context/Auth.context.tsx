'use client';
import { ReactNode, createContext, useEffect, useState } from 'react';

import { api } from '@/services/ApiService/axios.service';
import { decrypt, encrypt } from '@/services/CryptoService/crypto.service';
import { usePathname, useRouter } from 'next/navigation';
import nookies, { parseCookies, setCookie } from 'nookies';
import { UserProps } from './User.context';

export const cookiesUser = {
  windelcrmToken: 'windelcrm.token',
  windelcrmUser: 'windelcrm.user',
}

export interface AuthContextProps extends UserProps {
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

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<UserProps | null>();
  const [userNotFound, setUserNotFound] = useState(false);
  const [hasAuthError, setHasAuthError] = useState(false);
  const [userUnauthorized, setUserUnauthorized] = useState(false);
  const [enterpriseInfo, setEnterpriseInfo] = useState('');

  useEffect(() => {
    const { [cookiesUser.windelcrmToken]: token, [cookiesUser.windelcrmUser]: userCookies } =
      parseCookies();
    if (token && userCookies) {
      if (pathname === '/') router.push('/dashboard/');
    }
  }, [router, pathname]);

  async function authenticate(
    email: string,
    password: string,
    setBackdrop: any
  ) {
    
    const response = await api.post('/login/', {
      email: await encrypt(email),
      password: await encrypt(password),
    });

    if (response.status === 200) {
      setBackdrop(true);
      const payload = { token: response.data.token, data: response.data };
      setUser(payload.data);
      setCookie(undefined, cookiesUser.windelcrmToken, payload.token, {
        maxAge: 60 * 60 * 9,
        path: '/',
      });
      setCookie(
        undefined,
        cookiesUser.windelcrmUser,
        await encrypt(JSON.stringify(response.data)),
        {
          maxAge: 60 * 60 * 9,
          path: '/',
        }
      );
      setTimeout(() => {
        router.push('/dashboard');
      }, 3000);
    } else {
      setBackdrop(false);
    if (response.status === 404) {
        setUserNotFound(true);
      } else if (response.status === 401) {
        setUserUnauthorized(true);
      } else{
         setHasAuthError(true);
      }
    }
  }

  async function logout() {
    const { [cookiesUser.windelcrmUser]: userCookie } = parseCookies();
    
    if (userCookie) {
      const user = JSON.parse(await decrypt(userCookie));
     /*  await api.patch(`user/${user.id}`, {
        isLogged: false,
      }); */
    }
    nookies.destroy(null, cookiesUser.windelcrmToken, {
      path: '/',
    });
    nookies.destroy(null, cookiesUser.windelcrmUser, {
      path: '/',
    });
    nookies.destroy(null, 'verifiedTheCertificate', {
      path: '/',
    });
    setUser(null);
    router.push('/');
  }


  const closeUserNotFoundModal = () => {
    setUserNotFound(false);
  };

  const closeHasAuthErrorModal = () => {
    setHasAuthError(false);
  };

  const closeUserUnauthorizedModal = () => {
    setUserUnauthorized(false);
  };

  return (
    <AuthContext.Provider
      value={{
        ...user,
        authenticate,
        logout,
        userNotFound,
        hasAuthError,
        userUnauthorized,
        enterpriseInfo,
        closeUserNotFoundModal,
        closeHasAuthErrorModal,
        closeUserUnauthorizedModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
