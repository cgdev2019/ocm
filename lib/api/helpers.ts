import type { components } from '@/lib/api/generated/schema';

export type ActionStatus = components['schemas']['ActionStatus'];

export const assertActionSuccess = (status: ActionStatus | undefined, fallbackMessage: string) => {
  if (!status) {
    return;
  }

  if (status.status && status.status !== 'SUCCESS') {
    const message = status.message || fallbackMessage;
    throw new Error(message);
  }
};

export const ensureData = <T>(data: T | undefined, message: string): T => {
  if (!data) {
    throw new Error(message);
  }
  return data;
};

export const unwrapResponse = <T>(
  result: { data?: T; error?: unknown | null },
  fallbackMessage: string,
): T => {
  if (result.error) {
    if (result.error instanceof Error) {
      throw result.error;
    }

    if (typeof result.error === 'object' && result.error !== null) {
      const message =
        // @ts-expect-error – best effort extraction
        result.error?.message ||
        // @ts-expect-error – some OpenAPI specs nest message under actionStatus
        result.error?.actionStatus?.message;
      if (typeof message === 'string' && message.length > 0) {
        throw new Error(message);
      }
    }

    throw new Error(fallbackMessage);
  }

  return ensureData(result.data, fallbackMessage);
};
