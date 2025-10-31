export type AppEnv = {
  apiBaseUrl: string;
  mockApi: boolean;
  defaultLocale: string;
  keycloak: {
    url: string;
    realm: string;
    clientId: string;
  };
};

const required = (value: string | undefined, name: string, fallback?: string): string => {
  if (value && value.length > 0) {
    return value;
  }

  if (fallback) {
    return fallback;
  }

  throw new Error(`Missing required environment variable: ${name}`);
};

const flag = (value: string | undefined): boolean => {
  const normalized = (value ?? '').trim().toLowerCase();
  return normalized === 'on' || normalized === 'true' || normalized === '1';
};

export const env: AppEnv = {
  apiBaseUrl: required(
    process.env.API_BASE_URL,
    'API_BASE_URL',
    'https://siventeappvrec1.mediapost.fr:8444',
  ),
  mockApi: flag(process.env.NEXT_PUBLIC_MOCK ?? process.env.MOCK),
  defaultLocale: required(process.env.DEFAULT_LOCALE, 'DEFAULT_LOCALE', 'fr'),
  keycloak: {
    url: required(
      process.env.KEYCLOAK_APP_AUTH_URL,
      'KEYCLOAK_APP_AUTH_URL',
      'https://siventeappvrec1.mediapost.fr:8483/auth',
    ),
    realm: required(process.env.KEYCLOAK_REALM, 'KEYCLOAK_REALM', 'opencell'),
    clientId: required(process.env.KEYCLOAK_CLIENT_ID, 'KEYCLOAK_CLIENT_ID', 'opencell-frontend'),
  },
};
