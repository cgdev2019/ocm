import type { ActionStatus } from '@/features/customers/types';

export type AccountingPeriodDto = {
  accountingOperationAction?: string | null;
  accountingPeriodStatus?: string | null;
  code?: string | null;
  customLockNumberDays?: number | null;
  customLockOption?: string | null;
  endDate?: string | null;
  fiscalYear?: string | null;
  forceCustomDay?: number | null;
  forceOption?: string | null;
  id?: number | null;
  links?: Array<Record<string, unknown>> | null;
  ongoingSubAccountingPeriods?: number | null;
  regularUserLockOption?: string | null;
  startDate?: string | null;
  subAccountingPeriodProgress?: string | null;
  subAccountingPeriodType?: string | null;
  useSubAccountingPeriods?: boolean | null;
  [key: string]: unknown;
};

export type AccountingPeriodListItem = {
  fiscalYear: string;
  status?: string;
  subAccountingPeriodType?: string;
  subAccountingPeriodProgress?: string;
  ongoingSubAccountingPeriods?: number;
  startDate?: string;
  endDate?: string;
  useSubAccountingPeriods?: boolean;
};

export type AccountingPeriodFormValues = {
  accountingOperationAction?: string;
  customLockNumberDays?: number;
  customLockOption?: string;
  endDate?: string;
  fiscalYear: string;
  forceCustomDay?: number;
  forceOption?: string;
  regularUserLockOption?: string;
  startDate?: string;
  subAccountingPeriodType?: string;
  useSubAccountingPeriods: boolean;
};

export type AccountingPeriodDetailValues = AccountingPeriodFormValues & {
  accountingPeriodStatus?: string;
  ongoingSubAccountingPeriods?: number;
  subAccountingPeriodProgress?: string;
};

export type AccountingPeriodsFilters = {
  query?: string | null;
  status?: string | null;
  subAccountingPeriodType?: string | null;
};

export type GenericPagingRequest = {
  filters?: Record<string, unknown>;
  genericFields?: string[];
  limit?: number;
  nestedEntities?: string[];
  offset?: number;
  sortBy?: string;
  sortOrder?: 'ASCENDING' | 'DESCENDING';
};

export type AccountingPeriodsResult = {
  items: AccountingPeriodListItem[];
  paging: {
    totalRecords: number;
  };
};

export type AccountingPeriodListResponse = {
  accountingPeriods?: AccountingPeriodDto[] | null;
  actionStatus?: ActionStatus | null;
  data?: AccountingPeriodDto[] | null;
  list?: AccountingPeriodDto[] | null;
  paging?: {
    totalNumberOfRecords?: number | null;
  } | null;
  results?: AccountingPeriodDto[] | null;
  totalNumberOfRecords?: number | null;
};

export type GenerateNextAccountingPeriodResponse = {
  accountingPeriod?: AccountingPeriodDto | null;
  actionStatus?: ActionStatus | null;
};

export type AccountingPeriodStatusUpdateInput = {
  fiscalYear: string;
  status: string;
};

export type AccountingSubPeriodStatusInput = {
  fiscalYear: string;
  number: string;
  status: string;
  reason?: string | null;
};
