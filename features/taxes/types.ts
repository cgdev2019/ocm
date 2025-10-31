import type { components } from '@/lib/api/generated/schema';

export type TaxDto = components['schemas']['TaxDto'];
export type GetTaxResponse = components['schemas']['GetTaxResponse'];
export type GetTaxesResponse = components['schemas']['GetTaxesResponse'];

export type TaxListItem = {
  code: string;
  description?: string;
  percent?: number;
  accountingCode?: string;
};

export type TaxFormValues = {
  code: string;
  description?: string;
  percent?: number;
  accountingCode?: string;
};
