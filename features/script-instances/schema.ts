import { z } from 'zod';

export const scriptInstanceFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  type: z.enum(['JAVA', 'JAVA_CLASS']).optional(),
  reuse: z.boolean().optional(),
  script: z.string().min(1, 'forms.required'),
  disabled: z.boolean().optional(),
  scriptInstanceCategoryCode: z.string().optional(),
  codeOnly: z.boolean().optional(),
});

export type ScriptInstanceFormSchema = z.infer<typeof scriptInstanceFormSchema>;
