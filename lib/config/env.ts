export type AppEnv = {
  apiBaseUrl: string;
  mockApi: boolean;
  defaultLocale: string;
  opencellProxyLogs: boolean;
  apiRequestTimeoutMs: number;
  keycloak: {
    url: string;
    realm: string;
    clientId: string;
  };
};

const pickEnvValue = (
  primary: string | undefined,
  secondary: string | undefined,
): string | undefined => {
  return primary && primary.length > 0 ? primary : secondary;
};

const required = (
  value: string | undefined,
  name: string,
  fallback?: string,
  alternateName?: string,
): string => {
  if (value && value.length > 0) {
    return value;
  }

  if (fallback) {
    return fallback;
  }

  if (alternateName) {
    throw new Error(`Missing required environment variable: ${name} (or ${alternateName})`);
  }

  throw new Error(`Missing required environment variable: ${name}`);
};

const flag = (value: string | undefined, defaultValue = false): boolean => {
  if (value === undefined || value.length === 0) {
    return defaultValue;
  }

  const normalized = value.trim().toLowerCase();

  if (normalized === 'on' || normalized === 'true' || normalized === '1' || normalized === 'yes') {
    return true;
  }

  if (normalized === 'off' || normalized === 'false' || normalized === '0' || normalized === 'no') {
    return false;
  }

  return defaultValue;
};

const numberValue = (value: string | undefined, defaultValue: number): number => {
  if (value === undefined || value.length === 0) {
    return defaultValue;
  }

  const parsed = Number(value);
  if (Number.isFinite(parsed) && parsed > 0) {
    return parsed;
  }

  return defaultValue;
};

export const env: AppEnv = {
  apiBaseUrl: required(
    pickEnvValue(process.env.NEXT_PUBLIC_API_BASE_URL, process.env.API_BASE_URL),
    'NEXT_PUBLIC_API_BASE_URL',
    'https://siventeappvrec1.mediapost.fr:8444/opencell',
    'API_BASE_URL',
  ),
  mockApi: flag(process.env.NEXT_PUBLIC_MOCK ?? process.env.MOCK),
  defaultLocale: required(process.env.DEFAULT_LOCALE, 'DEFAULT_LOCALE', 'fr'),
  opencellProxyLogs: flag(process.env.OPENCELL_PROXY_LOGS),
  apiRequestTimeoutMs: numberValue(
    pickEnvValue(process.env.NEXT_PUBLIC_API_TIMEOUT_MS, process.env.API_TIMEOUT_MS),
    10000,
  ),
  keycloak: {
    url: required(
      pickEnvValue(process.env.NEXT_PUBLIC_KEYCLOAK_APP_AUTH_URL, process.env.KEYCLOAK_APP_AUTH_URL),
      'NEXT_PUBLIC_KEYCLOAK_APP_AUTH_URL',
      'https://siventeappvrec1.mediapost.fr:8483/auth',
      'KEYCLOAK_APP_AUTH_URL',
    ),
    realm: required(
      pickEnvValue(process.env.NEXT_PUBLIC_KEYCLOAK_REALM, process.env.KEYCLOAK_REALM),
      'NEXT_PUBLIC_KEYCLOAK_REALM',
      'opencell',
      'KEYCLOAK_REALM',
    ),
    clientId: required(
      pickEnvValue(process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID, process.env.KEYCLOAK_CLIENT_ID),
      'NEXT_PUBLIC_KEYCLOAK_CLIENT_ID',
      'opencell-web',
      'KEYCLOAK_CLIENT_ID',
    ),
  },
};
