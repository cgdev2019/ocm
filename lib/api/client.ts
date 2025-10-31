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

const isBrowser = typeof window !== 'undefined';

export const apiClient = createClient<paths>({
  baseUrl: isBrowser ? '/api/opencell' : env.apiBaseUrl,
  fetch: async (input: RequestInfo, init?: RequestInit) => {
    const request = new Request(input, init);
    request.headers.set('Accept', 'application/json');
    return fetch(request);
  },
});

apiClient.use(authMiddleware);

export type ApiClient = typeof apiClient;
