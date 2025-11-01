import { z } from 'zod';

export const invoicingPlanFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  updatedCode: z.string().optional(),
});

export type InvoicingPlanFormSchema = z.infer<typeof invoicingPlanFormSchema>;
