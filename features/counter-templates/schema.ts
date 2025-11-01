import { z } from 'zod';

export const counterTemplateFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  calendar: z.string().optional(),
  calendarCodeEl: z.string().optional(),
  unity: z.string().optional(),
  type: z.enum(['USAGE', 'NOTIFICATION', 'USAGE_AMOUNT']),
  ceiling: z.string().optional(),
  counterLevel: z.enum(['SI', 'SU', 'UA', 'BA', 'CA', 'CUST']).optional(),
  ceilingExpressionEl: z.string().optional(),
  notificationLevels: z.string().optional(),
  accumulator: z.boolean().optional(),
  accumulatorType: z.enum(['MULTI_VALUE', 'SINGLE_VALUE']).optional(),
  filterEl: z.string().optional(),
  keyEl: z.string().optional(),
  valueEl: z.string().optional(),
});

export type CounterTemplateFormSchema = z.infer<typeof counterTemplateFormSchema>;
