import { z } from 'zod';

export const discountPlanItemFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  discountPlanCode: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  invoiceCategoryCode: z.string().optional(),
  invoiceSubCategoryCode: z.string().optional(),
  discountPlanItemType: z.enum(['PERCENTAGE', 'FIXED']),
  discountValue: z.string().min(1, 'forms.required'),
  discountValueEL: z.string().min(1, 'forms.required'),
  expressionEl: z.string().optional(),
  allowToNegate: z.boolean().default(false),
  applyByArticle: z.boolean().default(false),
  pricePlanMatrixCode: z.string().optional(),
  targetAccountingArticleCodes: z.string().optional(),
  sequence: z.string().optional(),
  priority: z.string().optional(),
  accountingArticleCode: z.string().optional(),
  lastDiscount: z.boolean().default(false),
});

export type DiscountPlanItemFormSchema = z.infer<typeof discountPlanItemFormSchema>;
