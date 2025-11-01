import { z } from 'zod';
import { isValidAccumulatedValuesJson } from '@/features/counter-instances/utils';

const optionalTrimmed = z
  .string()
  .trim()
  .optional()
  .transform((value) => (value && value.length > 0 ? value : undefined));

const optionalNumericString = z
  .string()
  .trim()
  .optional()
  .transform((value) => (value && value.length > 0 ? value : undefined));

const optionalJsonString = z
  .string()
  .trim()
  .optional()
  .refine((value) => (value ? isValidAccumulatedValuesJson(value) : true), {
    message: 'forms.counterInstance.invalidAccumulatedValues',
  })
  .transform((value) => (value && value.length > 0 ? value : undefined));

const counterTypeEnum = z.enum(['USAGE', 'NOTIFICATION', 'USAGE_AMOUNT']);
const accumulatorTypeEnum = z.enum(['MULTI_VALUE', 'SINGLE_VALUE']);

export const counterPeriodFormSchema = z.object({
  id: z.number().int().optional(),
  code: optionalTrimmed,
  counterType: counterTypeEnum.optional().or(z.literal('')).transform((value) => value || ''),
  level: optionalNumericString,
  periodStartDate: optionalTrimmed,
  periodEndDate: optionalTrimmed,
  value: optionalNumericString,
  accumulator: z.boolean().optional(),
  accumulatorType: accumulatorTypeEnum.optional().or(z.literal('')).transform((value) => value || ''),
  accumulatedValuesJson: optionalJsonString,
});

export const counterInstanceFormSchema = z.object({
  id: z.number().int().optional(),
  code: z.string().trim().min(1, 'forms.required'),
  counterTemplateCode: z.string().trim().min(1, 'forms.required'),
  chargeInstanceCode: optionalTrimmed,
  productCode: optionalTrimmed,
  userAccountCode: optionalTrimmed,
  customerAccountCode: optionalTrimmed,
  billingAccountCode: optionalTrimmed,
  subscriptionCode: optionalTrimmed,
  counterPeriods: z
    .array(counterPeriodFormSchema)
    .min(1, 'forms.counterInstance.counterPeriodsRequired'),
});

export type CounterInstanceFormSchema = z.infer<typeof counterInstanceFormSchema>;
export type CounterPeriodFormSchema = z.infer<typeof counterPeriodFormSchema>;
