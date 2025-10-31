import createClient, { type Middleware } from 'openapi-fetch';
import type { paths } from '@/lib/api/generated/schema';
import { env } from '@/lib/config/env';
import { getAccessToken } from '@/lib/auth/token-store';
import { ApiTimeoutError } from '@/lib/api/errors';

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
      const baseHeaders =
        input instanceof Request
          ? new Headers(input.headers)
          : undefined;
      const headers = new Headers(baseHeaders);
      if (init?.headers) {
        new Headers(init.headers).forEach((value, key) => {
          headers.set(key, value);
        });
      }
      if (!headers.has('Accept')) {
        headers.set('Accept', 'application/json');
      }

      const controller = new AbortController();
      const originalSignal = init?.signal;

      if (originalSignal?.aborted) {
        controller.abort();
      }

      const abortListener = () => controller.abort();
      if (originalSignal) {
        originalSignal.addEventListener('abort', abortListener);
      }

      const timeoutId = setTimeout(() => controller.abort(), env.apiRequestTimeoutMs);

      try {
        return await fetch(input, {
          ...init,
          headers,
          signal: controller.signal,
        });
      } catch (error) {
        if (
          (error instanceof DOMException && error.name === 'AbortError') ||
          (error instanceof Error && error.name === 'AbortError')
        ) {
          if (!originalSignal || !originalSignal.aborted) {
            throw new ApiTimeoutError();
          }
        }

        throw error;
      } finally {
        clearTimeout(timeoutId);
        if (originalSignal) {
          originalSignal.removeEventListener('abort', abortListener);
        }
      }
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
