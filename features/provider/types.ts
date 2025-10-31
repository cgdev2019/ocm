import type { components } from '@/lib/api/generated/schema';

export type ProviderDto = components['schemas']['ProviderDto'];
export type GetProviderResponse = components['schemas']['GetProviderResponse'];
export type ProvidersResponse = components['schemas']['ProvidersDto'];
export type GetCustomerAccountConfigurationResponseDto = components['schemas']['GetCustomerAccountConfigurationResponseDto'];
export type GetCustomerConfigurationResponseDto = components['schemas']['GetCustomerConfigurationResponseDto'];
export type GetInvoicingConfigurationResponseDto = components['schemas']['GetInvoicingConfigurationResponseDto'];
export type GetTradingConfigurationResponseDto = components['schemas']['GetTradingConfigurationResponseDto'];

export type ProviderFormValues = {
  code?: string;
  description?: string;
  currency?: string;
  country?: string;
  language?: string;
  multiCurrency?: boolean;
  multiCountry?: boolean;
  multiLanguage?: boolean;
  enterprise?: boolean;
  rounding?: number;
  roundingMode?: ProviderDto['roundingMode'];
  invoiceRounding?: number;
  invoiceRoundingMode?: ProviderDto['invoiceRoundingMode'];
  discountAccountingCode?: string;
  email?: string;
  recognizeRevenue?: boolean;
};

export type ProviderTenantListItem = {
  code: string;
  description?: string;
  currency?: string;
  country?: string;
};
