import type { components } from '@/lib/api/generated/schema';

export type CurrencyDto = components['schemas']['CurrencyDto'];
export type GetTradingCurrencyResponse = components['schemas']['GetTradingCurrencyResponse'];
export type TradingCurrenciesResponseDto = components['schemas']['TradingCurrenciesResponseDto'];
export type ExchangeRateDto = components['schemas']['ExchangeRateDto'];

export type CurrencyListItem = {
  code: string;
  description?: string;
  symbol?: string;
  decimalPlaces?: number;
  disabled?: boolean;
};

export type CurrencyFormValues = {
  code: string;
  description?: string;
  symbol?: string;
  decimalPlaces?: number;
  prCurrencyToThis?: number;
  disabled?: boolean;
};

export type ExchangeRateFormValues = {
  id?: number;
  fromDate: string;
  exchangeRate: number;
};
