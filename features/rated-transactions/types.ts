import type { components } from '@/lib/api/generated/schema';

export type RatedTransactionDto = components['schemas']['RatedTransactionDto'];
export type RatedTransactionListResponseDto = components['schemas']['RatedTransactionListResponseDto'];
export type PagingAndFiltering = components['schemas']['PagingAndFiltering'];
export type ActionStatus = components['schemas']['ActionStatus'];

export type RatedTransactionFilters = {
  query?: string;
  status?: string | null;
  userAccountCode?: string | null;
};

export type RatedTransactionListItem = {
  id: string;
  code: string;
  usageDate: string;
  status?: string;
  description?: string;
  unityDescription?: string;
  quantity?: number;
  unitAmountWithoutTax?: number;
  unitAmountWithTax?: number;
  amountWithoutTax?: number;
  amountWithTax?: number;
  amountTax?: number;
  priceplanCode?: string;
  userAccountCode?: string;
  invoiceSubCategoryCode?: string;
  sellerCode?: string;
  billingAccountCode?: string;
};

export type RatedTransactionsResult = {
  items: RatedTransactionListItem[];
  totalRecords: number;
};
