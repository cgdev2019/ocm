import createClient, { type Middleware } from 'openapi-fetch';
import type { paths } from '@/lib/api/generated/schema';
import { env } from '@/lib/config/env';
import { getAccessToken } from '@/lib/auth/token-store';

const authMiddleware: Middleware = {
  onRequest: async ({ request }) => {
    const token = getAccessToken();
    if (token) {
      request.headers.set('Authorization', `Bearer ${token}`);
    }

    if (!request.headers.has('Content-Type')) {
      request.headers.set('Content-Type', 'application/json');
    }

    return request;
  },
};

const createApiClient = (baseUrl: string) => {
  const client = createClient<paths>({
    baseUrl,
    fetch: async (input: RequestInfo, init?: RequestInit) => {
      const request = new Request(input, init);
      request.headers.set('Accept', 'application/json');
      return fetch(request);
    },
  });

  client.use(authMiddleware);

  return client;
};

let browserClient: ReturnType<typeof createApiClient> | null = null;
let serverClient: ReturnType<typeof createApiClient> | null = null;

export const getApiClient = () => {
  if (typeof window === 'undefined') {
    if (!serverClient) {
      serverClient = createApiClient(env.apiBaseUrl);
    }
    return serverClient;
  }

  if (!browserClient) {
    browserClient = createApiClient('/api/opencell');
  }

  return browserClient;
};

export type ApiClient = ReturnType<typeof createApiClient>;
