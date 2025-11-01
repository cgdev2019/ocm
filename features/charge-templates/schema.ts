import { z } from 'zod';

export const chargeTemplateFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  invoiceSubCategory: z.string().optional(),
  amountEditable: z.boolean().optional(),
  ratingScriptCode: z.string().optional(),
  taxClassCode: z.string().optional(),
  status: z.enum(['DRAFT', 'ACTIVE', 'ARCHIVED']).optional(),
  revenueRecognitionRuleCode: z.string().optional(),
  unitMultiplicator: z.string().optional(),
  unitNbDecimal: z.string().optional(),
  dropZeroWo: z.boolean().optional(),
});

export type ChargeTemplateFormSchema = z.infer<typeof chargeTemplateFormSchema>;
