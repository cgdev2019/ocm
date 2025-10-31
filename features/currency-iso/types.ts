import type { components } from '@/lib/api/generated/schema';

export type CurrencyIsoDto = components['schemas']['CurrencyIsoDto'];
export type GetCurrencyIsoResponse = components['schemas']['GetCurrencyIsoResponse'];
export type GetCurrenciesIsoResponse = components['schemas']['GetCurrenciesIsoResponse'];

export type CurrencyIsoListItem = {
  code: string;
  description?: string;
};

export type CurrencyIsoFormValues = {
  code: string;
  description?: string;
};
