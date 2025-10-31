import type { components } from '@/lib/api/generated/schema';

export type CustomerAccountDto = components['schemas']['CustomerAccountDto'];
export type CustomerAccountsResponseDto = components['schemas']['CustomerAccountsResponseDto'];
export type GetCustomerAccountResponseDto = components['schemas']['GetCustomerAccountResponseDto'];
export type ActionStatus = components['schemas']['ActionStatus'];

export type CustomerAccountListItem = {
  code: string;
  description?: string;
  customer?: string;
  currency?: string;
  language?: string;
  status?: string;
};

export type CustomerAccountFormValues = {
  code: string;
  description?: string;
  customer: string;
  currency: string;
  language: string;
  paymentMethod?: string;
};
