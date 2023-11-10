import { NextResponse, userAgent } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { isBot } = userAgent(request);
  if (isBot) {
    return NextResponse.rewrite(new URL('/logout', request.url));
  }

  // Lista de rotas que não requerem verificação de token
  const publicRoutes = [
    '/forgot',
    '/logout',
    '/register',
    '/faqs',
    '/',
    '/auth/resetPassword',
    '/favicon.ico',
    '/logo/logoW.svg',
    '/policy',
  ];

  const path = request.nextUrl.pathname;
//static next Routes -> required
  if (
    publicRoutes.includes(path) ||
    path.startsWith('/_next/') ||
    path.startsWith('/static/')
  ) {
    return NextResponse.next();
  } 
  return NextResponse.next();
}
