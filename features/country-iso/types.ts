import type { components } from '@/lib/api/generated/schema';

export type CountryIsoDto = components['schemas']['CountryIsoDto'];
export type GetCountryIsoResponse = components['schemas']['GetCountryIsoResponse'];
export type GetCountriesIsoResponse = components['schemas']['GetCountriesIsoResponse'];

export type CountryIsoListItem = {
  countryCode: string;
  description?: string;
  currencyCode: string;
  languageCode: string;
};

export type CountryIsoFormValues = {
  countryCode: string;
  description?: string;
  currencyCode: string;
  languageCode: string;
};
