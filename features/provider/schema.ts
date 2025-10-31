import { z } from 'zod';

export const providerFormSchema = z.object({
  code: z.string().optional(),
  description: z.string().optional(),
  currency: z.string().optional(),
  country: z.string().optional(),
  language: z.string().optional(),
  multiCurrency: z.boolean().optional(),
  multiCountry: z.boolean().optional(),
  multiLanguage: z.boolean().optional(),
  enterprise: z.boolean().optional(),
  rounding: z.coerce.number().nonnegative().optional(),
  roundingMode: z.enum(['NEAREST', 'DOWN', 'UP', 'HALF_EVEN']).optional(),
  invoiceRounding: z.coerce.number().nonnegative().optional(),
  invoiceRoundingMode: z.enum(['NEAREST', 'DOWN', 'UP', 'HALF_EVEN']).optional(),
  discountAccountingCode: z.string().optional(),
  email: z.string().email('forms.invalidEmail').optional(),
  recognizeRevenue: z.boolean().optional(),
});

export type ProviderFormSchema = z.infer<typeof providerFormSchema>;
