import { z } from 'zod';

const unitPriceSchema = z
  .string()
  .optional()
  .transform((value) => (value && value.trim().length > 0 ? value.trim() : undefined))
  .refine((value) => value === undefined || !Number.isNaN(Number(value)), {
    message: 'forms.invalidNumber',
  });

const languageDescriptionSchema = z.object({
  languageCode: z.string().min(1, 'forms.required'),
  description: z.string().min(1, 'forms.required'),
});

export const accountingArticleFormSchema = z.object({
  id: z.number().optional(),
  code: z.string().min(1, 'forms.required'),
  description: z.string().min(1, 'forms.required'),
  invoiceSubCategoryCode: z.string().min(1, 'forms.required'),
  taxClassCode: z.string().min(1, 'forms.required'),
  accountingCode: z.string().optional(),
  articleFamilyCode: z.string().optional(),
  invoiceTypeCode: z.string().optional(),
  invoiceTypeEl: z.string().optional(),
  accountingCodeEl: z.string().optional(),
  columnCriteriaEl: z.string().optional(),
  analyticCode1: z.string().optional(),
  analyticCode2: z.string().optional(),
  analyticCode3: z.string().optional(),
  unitPrice: unitPriceSchema,
  ignoreAggregation: z.boolean().default(false),
  languageDescriptions: z.array(languageDescriptionSchema).default([]),
  customFieldsJson: z
    .string()
    .optional()
    .transform((value) => (value && value.trim().length > 0 ? value.trim() : undefined))
    .refine((value) => {
      if (!value) {
        return true;
      }
      try {
        JSON.parse(value);
        return true;
      } catch {
        return false;
      }
    }, { message: 'forms.invalidJson' }),
});

export type AccountingArticleFormSchema = z.infer<typeof accountingArticleFormSchema>;
