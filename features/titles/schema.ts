import { z } from 'zod';

export const titleFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  isCompany: z.boolean().default(false),
});

export type TitleFormSchema = z.infer<typeof titleFormSchema>;
