import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from '@/lib/i18n/config';

export default createMiddleware({
  defaultLocale,
  locales,
});

export const config = {
  matcher: [String.raw`/((?!api|_next|.*\..*).*)`],
};
