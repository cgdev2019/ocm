import { z } from 'zod';

const optionalNumber = z
  .string()
  .or(z.number())
  .optional()
  .transform((value) => {
    if (value === undefined || value === null || value === '') {
      return undefined;
    }
    const parsed = typeof value === 'number' ? value : Number(value);
    return Number.isNaN(parsed) ? undefined : parsed;
  });

export const billingCycleFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  calendar: z.string().min(1, 'forms.required'),
  invoiceDateDelayEL: z.string().min(1, 'forms.required'),
  invoiceDateDelay: optionalNumber,
  dueDateDelay: optionalNumber,
  dueDateDelayEL: z.string().optional(),
  type: z.enum(['BILLINGACCOUNT', 'SUBSCRIPTION', 'ORDER']).optional(),
  referenceDate: z.enum(['TODAY', 'NEXT_INVOICE_DATE', 'LAST_TRANSACTION_DATE', 'END_DATE']).optional(),
  invoicingThreshold: optionalNumber,
  computeDatesAtValidation: z.boolean().optional(),
});

export type BillingCycleFormSchema = z.infer<typeof billingCycleFormSchema>;
