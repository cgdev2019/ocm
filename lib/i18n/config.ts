import { env } from '@/lib/config/env';

export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];

const fallbackLocale: Locale = 'fr';

export const defaultLocale: Locale = locales.includes(env.defaultLocale as Locale)
  ? (env.defaultLocale as Locale)
  : fallbackLocale;

export const localeNames: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
};
