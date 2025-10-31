import { z } from 'zod';

export const configurationFormSchema = z.object({
  key: z.string().min(1, 'forms.required'),
  value: z.string().optional(),
});

export type ConfigurationFormSchema = z.infer<typeof configurationFormSchema>;
