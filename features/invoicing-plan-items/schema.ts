import { z } from 'zod';

const optionalNumber = z
  .union([z.string(), z.number()])
  .optional()
  .transform((value) => {
    if (value === undefined || value === null || value === '') {
      return undefined;
    }
    const parsed = typeof value === 'number' ? value : Number(value);
    return Number.isNaN(parsed) ? undefined : parsed;
  });

export const invoicingPlanItemFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  billingPlanCode: z.string().optional(),
  advancement: optionalNumber,
  rateToBill: optionalNumber,
  updatedCode: z.string().optional(),
});

export type InvoicingPlanItemFormSchema = z.infer<typeof invoicingPlanItemFormSchema>;
