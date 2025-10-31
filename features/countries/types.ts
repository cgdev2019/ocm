import type { components } from '@/lib/api/generated/schema';

export type CountryDto = components['schemas']['CountryDto'];
export type TradingCountryDto = components['schemas']['TradingCountryDto'];
export type TradingCountriesResponseDto = components['schemas']['TradingCountriesResponseDto'];
export type GetTradingCountryResponse = components['schemas']['GetTradingCountryResponse'];

export type CountryListItem = {
  countryCode: string;
  name?: string;
  currencyCode: string;
  languageCode?: string;
  disabled?: boolean;
};

export type CountryFormValues = {
  countryCode: string;
  name?: string;
  currencyCode: string;
  languageCode?: string;
  disabled?: boolean;
};
