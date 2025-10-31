import { z } from 'zod';

export const currencyIsoFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
});

export type CurrencyIsoFormSchema = z.infer<typeof currencyIsoFormSchema>;
