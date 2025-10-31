import { z } from 'zod';

export const customerAccountFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  customer: z.string().min(1, 'forms.required'),
  currency: z.string().min(1, 'forms.required'),
  language: z.string().min(1, 'forms.required'),
  paymentMethod: z.string().optional(),
});

export type CustomerAccountFormSchema = z.infer<typeof customerAccountFormSchema>;
