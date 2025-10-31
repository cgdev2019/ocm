import { z } from 'zod';

export const providerContactFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email('forms.invalidEmail').optional(),
  phone: z.string().optional(),
  mobile: z.string().optional(),
  fax: z.string().optional(),
  genericMail: z.string().email('forms.invalidEmail').optional(),
  address1: z.string().optional(),
  address2: z.string().optional(),
  address3: z.string().optional(),
  address4: z.string().optional(),
  address5: z.string().optional(),
  zipCode: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  state: z.string().optional(),
});

export type ProviderContactFormSchema = z.infer<typeof providerContactFormSchema>;
