'use client';
import { ReactNode, createContext, useEffect } from 'react';

import { api } from '@services/ApiService/axios.service';
import { encrypt } from '@services/CryptoService/crypto.service';
import { usePathname, useRouter } from 'next/navigation';
import nookies, { parseCookies, setCookie } from 'nookies';
import { useBackdrop } from '../hooks/UseBackdrop.hook';
import { useSnackBar } from '../hooks/UseToast.hook';
import { getUserCookie } from '../services/CookieService/Cookie.service';
import { CookiesEnum } from '../shared/cookies/Cookies.enum';

export interface AuthContextProps {
  authenticate: (
    email: string,
    password: string,
    companyId?: number
  ) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const snackbar = useSnackBar()
  const backdrop = useBackdrop()

  useEffect(() => {
    const {
      [CookiesEnum.windelcrmToken]: token,
      [CookiesEnum.windelcrmUser]: userCookies,
    } = parseCookies();
    if (token && userCookies) {
      if (pathname === '/') router.push('/dashboard/');
    }
  }, [router, pathname]);

async function authenticate(
    email: string,
    password: string,
    companyId?: number
  ) {

    backdrop.openBackdrop()
    
    const response = await api.post('/login/', {
      email: await encrypt(email),
      password: await encrypt(password),
      companyId: companyId,
    })

    const responsData = response.data;

    if (response.status === 200) {
      const payload = { token: response.data.token, data: response.data };
      setCookie(undefined, CookiesEnum.windelcrmToken, payload.token, {
        maxAge: 60 * 60 * 9,
        path: '/',
      });
      setCookie(
        undefined,
        CookiesEnum.windelcrmUser,
        await encrypt(
          JSON.stringify({
            userData: responsData.userData,
            companyData: responsData.companyData,
          })
        ),
        {
          maxAge: 60 * 60 * 9,
          path: '/',
        }
      );

      setTimeout(() => {
        router.push('/dashboard');
      }, 1000);
    } else {
      if (response.status === 401) {
        snackbar.showSnackBar("Ops", "Usuário ou senha incorreto(s).", 'error')
      }
    }
  }

  async function logout() {
    const userCookie = await getUserCookie()
    if (userCookie) {
      await api.patch(`user/${userCookie.userData.id}`, {
        isLogged: false,
      });
    }
    nookies.destroy(null, CookiesEnum.windelcrmToken, {
      path: '/',
    });
    nookies.destroy(null, CookiesEnum.windelcrmUser, {
      path: '/',
    });
    nookies.destroy(null, 'verifiedTheCertificate', {
      path: '/',
    });
    router.push('/');
  }

  return (
    <AuthContext.Provider
      value={{
        authenticate,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
