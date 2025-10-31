import { z } from 'zod';

const sequenceSchema = z
  .object({
    prefixEL: z.string().optional(),
    invoiceSequenceCode: z.string().optional(),
    sequenceSize: z
      .string()
      .or(z.number())
      .optional()
      .transform((val) =>
        val === undefined || val === ''
          ? undefined
          : typeof val === 'number'
          ? val
          : Number(val),
      )
      .refine((val) => val === undefined || !Number.isNaN(val), 'forms.invalidNumber'),
    currentInvoiceNb: z
      .string()
      .or(z.number())
      .optional()
      .transform((val) =>
        val === undefined || val === ''
          ? undefined
          : typeof val === 'number'
          ? val
          : Number(val),
      )
      .refine((val) => val === undefined || !Number.isNaN(val), 'forms.invalidNumber'),
    sequencePattern: z.string().optional(),
    sequenceType: z
      .enum(['RUM', 'CUSTOMER_NO', 'SEQUENCE', 'NUMERIC', 'ALPHA_UP', 'UUID', 'REGEXP'])
      .optional(),
  })
  .optional();

export const genericCodeFormSchema = z.object({
  entityClass: z.string().min(1, 'forms.required'),
  formatEL: z.string().optional(),
  prefixOverride: z.string().optional(),
  sequence: sequenceSchema,
});

export type GenericCodeFormSchema = z.infer<typeof genericCodeFormSchema>;
