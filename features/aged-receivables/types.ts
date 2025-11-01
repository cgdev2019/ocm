import type { ActionStatus } from '@/features/customers/types';

export type AgedReceivableBucketDto = {
  label?: string | null;
  amount?: number | null;
};

export type AgedReceivableDto = {
  id?: string | number | null;
  customerAccountCode?: string | null;
  customerAccountDescription?: string | null;
  sellerCode?: string | null;
  sellerDescription?: string | null;
  invoiceNumber?: string | null;
  invoiceDate?: string | null;
  dueDate?: string | null;
  tradingCurrency?: string | null;
  funcCurrency?: string | null;
  notDueAmount?: number | null;
  totalAmount?: number | null;
  buckets?: AgedReceivableBucketDto[] | null;
};

export type AgedReceivablesResponseDto = {
  actionStatus?: ActionStatus | null;
  paging?: {
    offset?: number | null;
    limit?: number | null;
    totalNumberOfRecords?: number | null;
  } | null;
  bucketLabels?: string[] | null;
  agedReceivables?: AgedReceivableDto[] | null;
};

export type AgedReceivablesFilters = {
  customerAccountCode?: string;
  customerAccountDescription?: string;
  sellerCode?: string;
  sellerDescription?: string;
  invoiceNumber?: string;
  startDate?: string;
  startDueDate?: string;
  endDueDate?: string;
  tradingCurrency?: string;
  funcCurrency?: string;
  stepInDays?: number;
  numberOfPeriods?: number;
};

export type AgedReceivableListItem = {
  id: string;
  customerAccountCode?: string;
  customerAccountDescription?: string;
  sellerCode?: string;
  sellerDescription?: string;
  invoiceNumber?: string;
  invoiceDate?: string;
  dueDate?: string;
  tradingCurrency?: string;
  funcCurrency?: string;
  notDueAmount?: number;
  totalAmount?: number;
  bucketAmounts: Record<string, number | null | undefined>;
};

export type AgedReceivablesResult = {
  items: AgedReceivableListItem[];
  totalRecords: number;
  bucketLabels: string[];
};
