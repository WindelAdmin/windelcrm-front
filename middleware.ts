import { NextResponse, userAgent } from 'next/server';
import type { NextRequest } from 'next/server';
import { decrypt } from './services/CryptoService/crypto.service';

export async function middleware(request: NextRequest) {
  const { isBot } = userAgent(request);
  if (isBot) {
    return NextResponse.rewrite(new URL('/logout', request.url));
  }
  const publicRoutes = [
    '/forgot',
    '/logout',
    '/register',
    '/faqs',
    '/',
    '/auth',
    '/auth/resetPassword',
    '/favicon.ico',
    '/logo/logoW.svg',
    '/policy',
  ];

  const path = request.nextUrl.pathname;
  if (
    publicRoutes.includes(path) ||
    path.startsWith('/_next/') ||
    path.startsWith('/static/')
  ) {
    return NextResponse.next();
  } else {
    const token = request.cookies.get('windelcrm.token');
    const user = request.cookies.get('windelcrm.user');

    const decryptedUser = user && JSON.parse(await decrypt(user.value));
    if (!token) {
      return NextResponse.rewrite(new URL('/logout', request.url));
    }
    if (path.includes('form')) {
      const isEdit = /\/form\/\d+/;
      if (
        (isEdit.test(path) && !decryptedUser.permissionUpdate) ||
        (!isEdit.test(path) && !decryptedUser.permissionCreate)
      ) {
        return NextResponse.rewrite(
          new URL('/error/notAuthorized', request.url)
        );
      }
    }
  }
}
