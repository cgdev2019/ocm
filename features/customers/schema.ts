import { z } from 'zod';

export const customerFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  customerCategory: z.string().min(1, 'forms.required'),
  customerBrand: z.string().optional(),
  seller: z.string().optional(),
  vatNo: z.string().optional(),
  registrationNo: z.string().optional(),
  contactEmail: z.string().email('forms.invalidEmail').optional().or(z.literal('')),
  contactPhone: z.string().optional(),
  address1: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
});

export type CustomerFormSchema = z.infer<typeof customerFormSchema>;
