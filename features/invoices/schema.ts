import { z } from 'zod';

export const invoiceFormSchema = z.object({
  billingAccountCode: z.string().min(1, 'forms.required'),
  invoiceType: z.string().min(1, 'forms.required'),
  invoiceMode: z.enum(['AGGREGATED', 'DETAILLED']),
  invoiceDate: z.string().min(1, 'forms.required'),
  dueDate: z.string().min(1, 'forms.required'),
  rawAmount: z
    .string()
    .or(z.number())
    .transform((val) => (typeof val === 'number' ? val : Number(val)))
    .refine((val) => !Number.isNaN(val), 'forms.invalidNumber'),
  discountAmount: z
    .string()
    .or(z.number())
    .transform((val) => (typeof val === 'number' ? val : Number(val)))
    .refine((val) => !Number.isNaN(val), 'forms.invalidNumber'),
  amountWithTax: z
    .string()
    .or(z.number())
    .optional()
    .transform((val) => (val === undefined ? undefined : typeof val === 'number' ? val : Number(val)))
    .refine((val) => val === undefined || !Number.isNaN(val), 'forms.invalidNumber'),
  amountWithoutTax: z
    .string()
    .or(z.number())
    .optional()
    .transform((val) => (val === undefined ? undefined : typeof val === 'number' ? val : Number(val)))
    .refine((val) => val === undefined || !Number.isNaN(val), 'forms.invalidNumber'),
});

export type InvoiceFormSchema = z.infer<typeof invoiceFormSchema>;
