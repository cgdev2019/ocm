import { z } from 'zod';

export const businessAccountModelFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  hierarchyType: z.string().optional(),
  license: z.string().optional(),
  disabled: z.boolean().optional(),
});

export type BusinessAccountModelFormSchema = z.infer<typeof businessAccountModelFormSchema>;
