import createMiddleware from 'next-intl/middleware';
import { type NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const response = intlMiddleware(req);

  if (PUBLIC_FILE.test(pathname) || pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  if (response) {
    return response;
  }

  return NextResponse.next();
}
