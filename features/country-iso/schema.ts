import { z } from 'zod';

export const countryIsoFormSchema = z.object({
  countryCode: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  currencyCode: z.string().min(1, 'forms.required'),
  languageCode: z.string().min(1, 'forms.required'),
});

export type CountryIsoFormSchema = z.infer<typeof countryIsoFormSchema>;
