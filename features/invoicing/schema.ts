import { z } from 'zod';

const numericId = z
  .union([z.string(), z.number()])
  .transform((value) => {
    const parsed = typeof value === 'number' ? value : Number(value);
    return Number.isNaN(parsed) ? 0 : parsed;
  })
  .refine((value) => value > 0, 'forms.required');

const optionalDateTime = z
  .string()
  .optional()
  .transform((value) => (value ? value : undefined));

export const billingRunIdSchema = z.object({
  billingRunId: numericId,
});

export const invoiceActionSchema = billingRunIdSchema.extend({
  invoiceIds: z.string().min(1, 'forms.required'),
  deleteCanceledInvoices: z.boolean().optional(),
});

export const invalidateInvoiceDocumentsSchema = billingRunIdSchema.extend({
  invalidateXMLInvoices: z.boolean().optional(),
  invalidatePDFInvoices: z.boolean().optional(),
});

export const createBillingRunSchema = z.object({
  billingCycleCode: z.string().optional(),
  billingRunTypeEnum: z.enum(['AUTOMATIC', 'MANUAL', 'FULL_AUTOMATIC']).optional(),
  startDate: optionalDateTime,
  endDate: optionalDateTime,
  invoiceDate: optionalDateTime,
  lastTransactionDate: optionalDateTime,
  referenceDate: z.enum(['TODAY', 'NEXT_INVOICE_DATE', 'LAST_TRANSACTION_DATE', 'END_DATE']).optional(),
  collectionDate: optionalDateTime,
  computeDatesAtValidation: z.boolean().optional(),
  skipValidationScript: z.boolean().optional(),
  rejectAutoAction: z.enum(['CANCEL', 'MOVE', 'MANUAL_ACTION', 'AUTOMATIC_VALIDATION']).optional(),
  suspectAutoAction: z.enum(['CANCEL', 'MOVE', 'MANUAL_ACTION', 'AUTOMATIC_VALIDATION']).optional(),
  generateAO: z.boolean().optional(),
});

export const cancelBillingRunSchema = billingRunIdSchema;

export const validateBillingRunSchema = billingRunIdSchema;

export type BillingRunIdSchema = z.infer<typeof billingRunIdSchema>;
export type InvoiceActionSchema = z.infer<typeof invoiceActionSchema>;
export type InvalidateInvoiceDocumentsSchema = z.infer<typeof invalidateInvoiceDocumentsSchema>;
export type CreateBillingRunSchema = z.infer<typeof createBillingRunSchema>;
export type CancelBillingRunSchema = z.infer<typeof cancelBillingRunSchema>;
export type ValidateBillingRunSchema = z.infer<typeof validateBillingRunSchema>;
