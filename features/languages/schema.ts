import { z } from 'zod';

export const languageFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  disabled: z.boolean().optional(),
});

export type LanguageFormSchema = z.infer<typeof languageFormSchema>;
