import { z } from 'zod';

export const sellerFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  currencyCode: z.string().optional(),
  countryCode: z.string().optional(),
  languageCode: z.string().optional(),
  parentSeller: z.string().optional(),
  vatNo: z.string().optional(),
  registrationNo: z.string().optional(),
  legalType: z.string().optional(),
  legalText: z.string().optional(),
  email: z
    .string()
    .email('forms.invalidEmail')
    .optional()
    .or(z.literal(''))
    .transform((value) => (value === '' ? undefined : value)),
  phone: z.string().optional(),
  address1: z.string().optional(),
  address2: z.string().optional(),
  city: z.string().optional(),
  zipCode: z.string().optional(),
  state: z.string().optional(),
  addressCountry: z.string().optional(),
});

export type SellerFormSchema = z.infer<typeof sellerFormSchema>;
