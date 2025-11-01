import { z } from 'zod';

export const walletOperationFiltersSchema = z.object({
  query: z.string().optional(),
  status: z.string().optional(),
  userAccountCode: z.string().optional(),
  walletTemplate: z.string().optional(),
  fromDate: z.string().optional(),
  toDate: z.string().optional(),
});

const numberTransform = z
  .string()
  .or(z.number())
  .optional()
  .transform((value) => {
    if (value === undefined || value === null || value === '') {
      return undefined;
    }
    if (typeof value === 'number') {
      return value;
    }
    const parsed = Number(value);
    return Number.isNaN(parsed) ? undefined : parsed;
  });

export const walletOperationFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  userAccount: z.string().min(1, 'forms.required'),
  subscription: z.string().optional(),
  walletTemplate: z.string().optional(),
  seller: z.string().optional(),
  currency: z.string().optional(),
  type: z.enum(['CREDIT', 'DEBIT'], { required_error: 'forms.required' }),
  operationDate: z.string().optional(),
  quantity: numberTransform,
  unitAmountWithoutTax: numberTransform,
  unitAmountWithTax: numberTransform,
  amountWithoutTax: numberTransform,
  amountWithTax: numberTransform,
  amountTax: numberTransform,
});

export const walletReservationFormSchema = z.object({
  reservationId: numberTransform,
  providerCode: z.string().optional(),
  sellerCode: z.string().optional(),
  offerCode: z.string().optional(),
  userAccountCode: z.string().min(1, 'forms.required'),
  subscriptionDate: z.string().optional(),
  expirationDate: z.string().optional(),
  terminationDate: z.string().optional(),
  creditLimit: numberTransform,
  param1: z.string().optional(),
  param2: z.string().optional(),
  param3: z.string().optional(),
  amountWithTax: z.boolean().optional(),
});

export const walletBalanceFormSchema = z.object({
  sellerCode: z.string().optional(),
  customerCode: z.string().optional(),
  customerAccountCode: z.string().optional(),
  billingAccountCode: z.string().optional(),
  userAccountCode: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  walletCode: z.string().optional(),
  amountWithTax: z.boolean().optional(),
});

export const walletTemplateFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  walletType: z.enum(['POSTPAID', 'PREPAID']).optional(),
  fastRatingLevel: numberTransform,
  lowBalanceLevel: numberTransform,
  rejectLevel: numberTransform,
  rejectLevelEl: z.string().optional(),
  lowBalanceLevelEl: z.string().optional(),
});

export type WalletOperationFiltersSchema = z.infer<typeof walletOperationFiltersSchema>;
export type WalletOperationFormSchema = z.infer<typeof walletOperationFormSchema>;
export type WalletReservationFormSchema = z.infer<typeof walletReservationFormSchema>;
export type WalletBalanceFormSchema = z.infer<typeof walletBalanceFormSchema>;
export type WalletTemplateFormSchema = z.infer<typeof walletTemplateFormSchema>;
