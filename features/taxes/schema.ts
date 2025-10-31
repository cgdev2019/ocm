import { z } from 'zod';

export const taxFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  percent: z
    .string()
    .or(z.number())
    .optional()
    .transform((val) => (val === undefined ? undefined : typeof val === 'number' ? val : Number(val)))
    .refine((val) => val === undefined || !Number.isNaN(val), 'forms.invalidNumber'),
  accountingCode: z.string().optional(),
});

export type TaxFormSchema = z.infer<typeof taxFormSchema>;
