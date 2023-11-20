import type { NextRequest } from 'next/server';
import { NextResponse, userAgent } from 'next/server';

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
  
    if (!token) {
      return NextResponse.rewrite(new URL('/logout', request.url));
    }
  }
}
