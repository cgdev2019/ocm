import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { defaultLocale, locales } from '@/lib/i18n/config';

const intlProxy = createMiddleware({
  defaultLocale,
  locales,
});

export default function proxy(request: NextRequest) {
  return intlProxy(request);
}

export const config = {
  matcher: [String.raw`/((?!api|_next|.*\..*).*)`],
};
