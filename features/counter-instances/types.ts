import type { components } from '@/lib/api/generated/schema';

export type CounterPeriodDto = components['schemas']['CounterPeriodDto'];

export type CounterInstanceDto = {
  id?: number | null;
  code?: string | null;
  counterTemplateCode?: string | null;
  chargeInstanceCode?: string | null;
  productCode?: string | null;
  counterPeriods?: CounterPeriodDto[] | null;
  userAccountCode?: string | null;
  customerAccountCode?: string | null;
  billingAccountCode?: string | null;
  subscriptionCode?: string | null;
  [key: string]: unknown;
};

export type CounterInstanceListResponse = {
  actionStatus?: components['schemas']['ActionStatus'] | null;
  data?: CounterInstanceDto[] | null;
  results?: CounterInstanceDto[] | null;
  list?: CounterInstanceDto[] | null;
  counterInstances?: CounterInstanceDto[] | null;
  countersInstances?: { counterInstance?: CounterInstanceDto[] | null } | null;
  totalNumberOfRecords?: number | null;
  paging?: { totalNumberOfRecords?: number | null } | null;
};

export type CounterPeriodFormValues = {
  id?: number;
  code?: string;
  counterType?: CounterPeriodDto['counterType'] | '';
  level?: string;
  periodStartDate?: string;
  periodEndDate?: string;
  value?: string;
  accumulator?: boolean;
  accumulatorType?: CounterPeriodDto['accumulatorType'] | '';
  accumulatedValuesJson?: string;
};

export type CounterInstanceFormValues = {
  id?: number;
  code: string;
  counterTemplateCode: string;
  chargeInstanceCode?: string;
  productCode?: string;
  userAccountCode?: string;
  customerAccountCode?: string;
  billingAccountCode?: string;
  subscriptionCode?: string;
  counterPeriods: CounterPeriodFormValues[];
};

export type CounterInstanceDetail = CounterInstanceFormValues;

export type CounterInstanceListItem = {
  code: string;
  counterTemplateCode?: string;
  userAccountCode?: string;
  subscriptionCode?: string;
  chargeInstanceCode?: string;
  id?: number;
  counterPeriodsCount: number;
};

export type CounterInstanceListParams = {
  page: number;
  pageSize: number;
  search?: string | null;
};

export type CounterInstanceListResult = {
  items: CounterInstanceListItem[];
  paging: { totalRecords: number };
};

export type GenericPagingRequest = {
  filters?: Record<string, unknown>;
  genericFields?: string[];
  limit?: number;
  offset?: number;
  sortBy?: string;
  sortOrder?: 'ASCENDING' | 'DESCENDING';
};
