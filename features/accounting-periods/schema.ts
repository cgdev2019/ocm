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

const optionalString = z
  .string()
  .optional()
  .transform((value) => (value === undefined || value === '' ? undefined : value));

export const accountingPeriodFormSchema = z.object({
  fiscalYear: z.string().min(1, 'forms.required'),
  useSubAccountingPeriods: z.boolean().default(false),
  subAccountingPeriodType: optionalString,
  regularUserLockOption: optionalString,
  customLockNumberDays: optionalNumber,
  customLockOption: optionalString,
  forceCustomDay: optionalNumber,
  forceOption: optionalString,
  accountingOperationAction: optionalString,
  startDate: optionalString,
  endDate: optionalString,
});

export const accountingPeriodStatusSchema = z.object({
  status: z.string().min(1, 'forms.required'),
});

export const accountingSubPeriodStatusSchema = accountingPeriodStatusSchema.extend({
  number: z.string().min(1, 'forms.required'),
  reason: optionalString,
});

export type AccountingPeriodFormSchema = z.infer<typeof accountingPeriodFormSchema>;
export type AccountingPeriodStatusSchema = z.infer<typeof accountingPeriodStatusSchema>;
export type AccountingSubPeriodStatusSchema = z.infer<typeof accountingSubPeriodStatusSchema>;
