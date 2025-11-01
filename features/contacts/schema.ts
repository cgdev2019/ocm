import { z } from 'zod';

const optionalEmail = z
  .string()
  .trim()
  .email('forms.invalidEmail')
  .optional()
  .or(z.literal(''))
  .transform((value) => (value ? value : undefined));

const optionalString = z.string().trim().optional().transform((value) => (value ? value : undefined));

export const contactFormSchema = z.object({
  code: z
    .string({ required_error: 'forms.required' })
    .trim()
    .min(1, 'forms.required'),
  description: optionalString,
  company: optionalString,
  jobTitle: optionalString,
  email: optionalEmail,
  phone: optionalString,
  mobile: optionalString,
  comment: optionalString,
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
