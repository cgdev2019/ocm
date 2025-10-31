import { z } from 'zod';

export const invoiceSequenceFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  sequencePattern: z.string().optional(),
  sequenceType: z.enum(['RUM', 'CUSTOMER_NO', 'SEQUENCE', 'NUMERIC', 'ALPHA_UP', 'UUID', 'REGEXP']),
  sequenceSize: z
    .string()
    .or(z.number())
    .optional()
    .transform((val) =>
      val === undefined || val === '' ? undefined : typeof val === 'number' ? val : Number(val),
    )
    .refine((val) => val === undefined || !Number.isNaN(val), 'forms.invalidNumber'),
  currentInvoiceNb: z
    .string()
    .or(z.number())
    .optional()
    .transform((val) =>
      val === undefined || val === '' ? undefined : typeof val === 'number' ? val : Number(val),
    )
    .refine((val) => val === undefined || !Number.isNaN(val), 'forms.invalidNumber'),
});

export type InvoiceSequenceFormSchema = z.infer<typeof invoiceSequenceFormSchema>;
