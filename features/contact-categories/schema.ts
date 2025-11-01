import { z } from 'zod';

export const contactCategoryFormSchema = z.object({
  code: z
    .string({ required_error: 'forms.required' })
    .trim()
    .min(1, 'forms.required'),
  description: z.string().trim().optional(),
  id: z.number().int().positive().optional(),
});

export type ContactCategoryFormSchema = z.infer<typeof contactCategoryFormSchema>;
