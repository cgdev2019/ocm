import type { components } from '@/lib/api/generated/schema';

export type SellerDto = components['schemas']['SellerDto'];
export type GetSellerResponse = components['schemas']['GetSellerResponse'];
export type SellerResponseDto = components['schemas']['SellerResponseDto'];
export type SellerCodesResponseDto = components['schemas']['SellerCodesResponseDto'];

export type SellerListItem = {
  code: string;
  description?: string;
  countryCode?: string;
  currencyCode?: string;
};

export type SellerFormValues = {
  code: string;
  description?: string;
  currencyCode?: string;
  countryCode?: string;
  languageCode?: string;
  parentSeller?: string;
  vatNo?: string;
  registrationNo?: string;
  legalType?: string;
  legalText?: string;
  email?: string;
  phone?: string;
  address1?: string;
  address2?: string;
  city?: string;
  zipCode?: string;
  state?: string;
  addressCountry?: string;
};
