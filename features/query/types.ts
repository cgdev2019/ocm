import type { components } from '@/lib/api/generated/schema';

export type QueryResponse = components['schemas']['QueryResponse'];

export type QueryResult = {
  actionMessage?: string;
  result?: string;
};
