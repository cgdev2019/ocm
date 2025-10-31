import type { components } from '@/lib/api/generated/schema';

export type ProviderContactDto = components['schemas']['ProviderContactDto'];
export type ProviderContactResponseDto = components['schemas']['ProviderContactResponseDto'];
export type ProviderContactsResponseDto = components['schemas']['ProviderContactsResponseDto'];

export type ProviderContactListItem = {
  code: string;
  description?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
};

export type ProviderContactFormValues = {
  code: string;
  description?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  mobile?: string;
  fax?: string;
  genericMail?: string;
  address1?: string;
  address2?: string;
  address3?: string;
  address4?: string;
  address5?: string;
  zipCode?: string;
  city?: string;
  country?: string;
  state?: string;
};
