'use client';
import React, { createContext, useEffect, useState } from 'react';

import { LoginRequest } from './loginRequest';
import nookies, { parseCookies, setCookie } from 'nookies';
import { usePathname, useRouter } from 'next/navigation';


import { decrypt, encrypt } from '@/services/CryptoService/crypto.service';
import { api } from '@/services/ApiService/axios.service';
import { AuthProviderProps, ContextProps, UserProps } from './interface';




export const AuthContext = createContext<ContextProps>({} as ContextProps);
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<UserProps | null>();
  const [expiredTest, setExpiredTest] = useState(false);
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
    setBackdrop: any,
    backdrop: boolean
  ) {

    const response = await LoginRequest(email, password);

    if (response.success) {
      setBackdrop(true);
      const payload = { token: response.data.token, data: response.data };
      setUser(payload.data);
      setCookie(undefined, 'nextauth.token', payload.token, {
        maxAge: 60 * 60 * 9, // 9 hours
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
      const err = response.error as any;
    if (err.response?.data?.message === 'Usuario não existe') {
        setUserNotFound(true);
      } else if (err.message.indexOf('Network err') !== -1) {
        setHasAuthError(true);
      } else if (err.message.indexOf('Error authentication token') !== -1) {
        setUserUnauthorized(true);
      } else if (err.response.data.message === 'Unauthorized') {
        setUserUnauthorized(true);
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

  const closeExpiredTestModal = () => {
    setExpiredTest(false);
  };

  const closeUserNotFoundModal = () => {
    setUserNotFound(false);
  };

  const closeHasAuthErrorModal = () => {
    setHasAuthError(false);
  };

  const closeUserUnauthorizedModal = () => {
    setUserUnauthorized(false);
  };

  const closeUserMaxNumber = () => {
    setUserMaxNumber(false);
  };

  return (
    <AuthContext.Provider
      value={{
        ...user,
        authenticate,
        logout,
        expiredTest,
        userNotFound,
        hasAuthError,
        userUnauthorized,
        userMaxNumber,
        enterpriseInfo,
        regPerPage,
        closeExpiredTestModal,
        closeUserNotFoundModal,
        closeHasAuthErrorModal,
        closeUserUnauthorizedModal,
        closeUserMaxNumber,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
