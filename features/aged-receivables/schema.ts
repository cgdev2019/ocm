import { z } from 'zod';

export const agedReceivablesFiltersSchema = z.object({
  customerAccountCode: z.string().optional(),
  customerAccountDescription: z.string().optional(),
  sellerCode: z.string().optional(),
  sellerDescription: z.string().optional(),
  invoiceNumber: z.string().optional(),
  startDate: z.string().optional(),
  startDueDate: z.string().optional(),
  endDueDate: z.string().optional(),
  tradingCurrency: z.string().optional(),
  funcCurrency: z.string().optional(),
  stepInDays: z.string().optional(),
  numberOfPeriods: z.string().optional(),
});

export type AgedReceivablesFiltersSchema = z.infer<typeof agedReceivablesFiltersSchema>;
