'use client';
import { createContext, useEffect, useState } from 'react';

import { api } from '@/services/ApiService/axios.service';
import { decrypt, encrypt } from '@/services/CryptoService/crypto.service';
import { usePathname, useRouter } from 'next/navigation';
import nookies, { parseCookies, setCookie } from 'nookies';
import { AuthProviderProps, ContextProps, UserProps } from './interface';

export const AuthContext = createContext<ContextProps>({} as ContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<UserProps | null>();
  const [userNotFound, setUserNotFound] = useState(false);
  const [hasAuthError, setHasAuthError] = useState(false);
  const [userUnauthorized, setUserUnauthorized] = useState(false);
  const [userMaxNumber, setUserMaxNumber] = useState(false);
  const [enterpriseInfo, setEnterpriseInfo] = useState('');
  const [regPerPage, setRegPerPage] = useState(25);

  useEffect(() => {
    const { 'nextauth.token': token, 'nextauth.user': userCookies } =
      parseCookies();
    if (token && userCookies) {
      if (pathname === '/') router.push('/dashboard/');
    }
  }, []);

  const getUserCookies = () => {
    const { 'nextauth.token': token, 'nextauth.user': userCookies } =
      parseCookies();

      const userCookie = decrypt(userCookies)
      return userCookie
  }

  async function authenticate(
    email: string,
    password: string,
    setBackdrop: any
  ) {

    const response = await api.post('/login/', {
      email,
      password,
    });

    if (response.status === 200) {
      setBackdrop(true);
      const payload = { token: response.data.token, data: response.data };
      setUser(payload.data);
      setCookie(undefined, 'nextauth.token', payload.token, {
        maxAge: 60 * 60 * 9,
        path: '/',
      });
      setCookie(
        undefined,
        'nextauth.user',
        encrypt(JSON.stringify(response.data)),
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
    const { 'nextauth.user': userCookie } = parseCookies();
    
    if (userCookie) {
      const user = JSON.parse(decrypt(userCookie));
      await api.patch(`user/${user.usuarioId}`, {
        isLogged: false,
      });
    }
    nookies.destroy(null, 'nextauth.token', {
      path: '/',
    });
    nookies.destroy(null, 'nextauth.user', {
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
        regPerPage,
        closeUserNotFoundModal,
        closeHasAuthErrorModal,
        closeUserUnauthorizedModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
