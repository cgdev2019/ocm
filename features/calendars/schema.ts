import { z } from 'zod';

const optionalNumber = z
  .string()
  .or(z.number())
  .optional()
  .transform((value) => {
    if (value === undefined || value === null || value === '') {
      return undefined;
    }
    const parsed = typeof value === 'number' ? value : Number(value);
    return Number.isNaN(parsed) ? undefined : parsed;
  });

export const calendarFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  calendarType: z.enum(['YEARLY', 'DAILY', 'PERIOD', 'INTERVAL', 'INTERSECT', 'UNION', 'APPEND', 'BANKING', 'FIXED']),
  periodLength: optionalNumber,
  periodUnit: z.enum(['MONTH', 'DAY_OF_MONTH', 'HOUR_OF_DAY', 'MINUTE', 'SECOND']).optional(),
  nbPeriods: optionalNumber,
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  initDateEL: z.string().optional(),
});

export type CalendarFormSchema = z.infer<typeof calendarFormSchema>;
