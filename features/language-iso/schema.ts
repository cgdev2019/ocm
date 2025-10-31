import { z } from 'zod';

export const languageIsoFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
});

export type LanguageIsoFormSchema = z.infer<typeof languageIsoFormSchema>;
