import { z } from 'zod';

export const occTemplateFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  accountingCode: z.string().min(1, 'forms.required'),
  accountCode: z.string().optional(),
  occCategory: z.enum(['DEBIT', 'CREDIT']),
  accountCodeClientSide: z.string().optional(),
  journalCode: z.string().optional(),
  accountingSchemeCode: z.string().optional(),
  contractAccountingCode: z.string().optional(),
  contraAccountingCode2: z.string().optional(),
});

export type OccTemplateFormSchema = z.infer<typeof occTemplateFormSchema>;
