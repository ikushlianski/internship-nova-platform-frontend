import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest): NextResponse {
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
