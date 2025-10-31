import { z } from 'zod';

export const ratedTransactionFiltersSchema = z.object({
  query: z.string().optional(),
  status: z.string().optional(),
  userAccountCode: z.string().optional(),
});

export type RatedTransactionFiltersSchema = z.infer<typeof ratedTransactionFiltersSchema>;
