import { z } from 'zod';

export const countryFormSchema = z.object({
  countryCode: z.string().min(1, 'forms.required'),
  name: z.string().optional(),
  currencyCode: z.string().min(1, 'forms.required'),
  languageCode: z.string().optional(),
  disabled: z.boolean().optional(),
});

export type CountryFormSchema = z.infer<typeof countryFormSchema>;
