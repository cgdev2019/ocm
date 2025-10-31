import type { components } from '@/lib/api/generated/schema';

export type UsageResponseDto = components['schemas']['UsageResponseDto'];
export type UsageChargeAggregateResponseDto = components['schemas']['UsageChargeAggregateResponseDto'];
export type UsageDto = components['schemas']['UsageDto'];
export type ChargeAggregateDto = components['schemas']['ChargeAggregateDto'];

export type UsageSearchCriteria = {
  userAccountCode: string;
  fromDate?: string;
  toDate?: string;
};

export type UsageListItem = {
  id: string;
  categoryCode: string;
  categoryDescription?: string;
  subCategoryCode?: string;
  subCategoryDescription?: string;
  dateEvent?: string;
  code?: string;
  description?: string;
  unityDescription?: string;
  unitAmountWithoutTax?: number;
  quantity?: number;
  amountWithoutTax?: number;
  parameter1?: string;
  parameter2?: string;
  parameter3?: string;
  parameterExtra?: string;
  offerCode?: string;
  priceplanCode?: string;
};

export type UsageChargeAggregateListItem = {
  id: string;
  description?: string;
  quantity?: string;
  amount?: string;
};
