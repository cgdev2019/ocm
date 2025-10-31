import { z } from 'zod';

export const invoiceCategoryFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  occTemplateCode: z.string().min(1, 'forms.required'),
  occTemplateNegativeCode: z.string().optional(),
  sortIndex: z
    .string()
    .or(z.number())
    .optional()
    .transform((val) =>
      val === undefined || val === '' ? undefined : typeof val === 'number' ? val : Number(val),
    )
    .refine((val) => val === undefined || !Number.isNaN(val), 'forms.invalidNumber'),
});

export type InvoiceCategoryFormSchema = z.infer<typeof invoiceCategoryFormSchema>;
