import { z } from 'zod';

const optionalNumber = z.preprocess(
  (value) => {
    if (value === '' || value === null || value === undefined) {
      return undefined;
    }
    const numeric = Number(value);
    return Number.isNaN(numeric) ? value : numeric;
  },
  z.number({ invalid_type_error: 'forms.invalidNumber' }).optional(),
);

export const currencyFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  symbol: z.string().optional(),
  decimalPlaces: optionalNumber,
  prCurrencyToThis: optionalNumber,
  disabled: z.boolean().optional(),
});

export type CurrencyFormSchema = z.infer<typeof currencyFormSchema>;
