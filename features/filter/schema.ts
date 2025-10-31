import { z } from 'zod';

export const filterFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  entityClass: z.string().optional(),
  inputXml: z.string().optional(),
  pollingQuery: z.string().optional(),
  shared: z.boolean().optional(),
  disabled: z.boolean().optional(),
});

export type FilterFormSchema = z.infer<typeof filterFormSchema>;
