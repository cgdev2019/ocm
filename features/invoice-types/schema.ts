import { z } from 'zod';

export const invoiceTypeFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  occTemplateCode: z.string().min(1, 'forms.required'),
  occTemplateNegativeCode: z.string().optional(),
  invoiceValidationScriptCode: z.string().optional(),
  customInvoiceXmlScriptInstanceCode: z.string().optional(),
  billingTemplateName: z.string().optional(),
  emailTemplateCode: z.string().optional(),
  matchingAuto: z.boolean().optional(),
  invoiceAccountable: z.boolean().optional(),
  useSelfSequence: z.boolean().optional(),
});

export type InvoiceTypeFormSchema = z.infer<typeof invoiceTypeFormSchema>;
