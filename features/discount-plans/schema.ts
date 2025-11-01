import { z } from 'zod';

export const discountPlanFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  discountPlanType: z.enum(['QUOTE', 'OFFER', 'PRODUCT', 'INVOICE', 'INVOICE_LINE', 'PROMO_CODE']),
  status: z.enum(['ACTIVE', 'INACTIVE', 'DRAFT', 'IN_USE', 'EXPIRED']),
  disabled: z.boolean().default(false),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  defaultDuration: z.string().optional(),
  durationUnit: z.enum(['MONTH', 'DAY']).optional(),
  expressionEl: z.string().optional(),
  applicationFilterEL: z.string().optional(),
  initialQuantity: z.string().optional(),
  usedQuantity: z.string().optional(),
  applicationLimit: z.string().optional(),
  sequence: z.string().optional(),
  applicableOnDiscountedPrice: z.boolean().default(false),
  applicableOnContractPrice: z.boolean().default(false),
  applicableOnOverriddenPrice: z.boolean().default(false),
});

export type DiscountPlanFormSchema = z.infer<typeof discountPlanFormSchema>;
