import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { defaultLocale, locales } from '@/lib/i18n/config';

const intlProxy = createMiddleware({
  defaultLocale,
  locales,
});

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_vercel') ||
    pathname.includes('/_next/') ||
    pathname === '/_next' ||
    pathname === '/favicon.ico' ||
    pathname.match(/\.[^/]+$/)
  ) {
    return NextResponse.next();
  }

  return intlProxy(request);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
