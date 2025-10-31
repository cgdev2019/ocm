import { z } from 'zod';

export const accessFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  subscription: z.string().min(1, 'forms.required'),
  subscriptionValidityDate: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  usageDate: z.string().optional(),
  disabled: z.boolean().optional(),
});

export type AccessFormSchema = z.infer<typeof accessFormSchema>;
