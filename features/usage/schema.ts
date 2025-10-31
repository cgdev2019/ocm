import { z } from 'zod';

export const usageSearchSchema = z.object({
  userAccountCode: z.string().min(1, 'forms.required'),
  fromDate: z.string().optional(),
  toDate: z.string().optional(),
});

export type UsageSearchSchema = z.infer<typeof usageSearchSchema>;
