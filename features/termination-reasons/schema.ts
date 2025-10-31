import { z } from 'zod';

export const terminationReasonFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  applyAgreement: z.boolean().optional(),
  invoiceAgreementImmediately: z.boolean().optional(),
  applyReimbursment: z.boolean().optional(),
  applyTerminationCharges: z.boolean().optional(),
  overrideProrata: z.enum(['NO_OVERRIDE', 'PRORATA', 'NO_PRORATA']).optional(),
  reimburseOneshots: z.boolean().optional(),
});

export type TerminationReasonFormSchema = z.infer<typeof terminationReasonFormSchema>;
