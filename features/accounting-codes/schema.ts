import { z } from 'zod';

const chartOfAccountTypeEnum = z
  .enum(['ASSETS', 'LIABILITIES', 'EQUITY', 'REVENUE', 'EXPENSE'], {
    message: 'forms.required',
  })
  .optional();

const chartOfAccountViewTypeEnum = z
  .enum(['VIEW', 'REGULAR'], {
    message: 'forms.required',
  })
  .optional();

export const accountingCodeFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  parentAccountingCode: z.string().optional(),
  chartOfAccountTypeEnum,
  chartOfAccountViewTypeEnum,
  reportingAccount: z.string().optional(),
  notes: z.string().optional(),
  disabled: z.boolean().optional(),
  migrated: z.boolean().optional(),
});

export type AccountingCodeFormSchema = z.infer<typeof accountingCodeFormSchema>;
