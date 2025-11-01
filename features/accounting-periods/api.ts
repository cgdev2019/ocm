import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type {
  AccountingPeriodDetailValues,
  AccountingPeriodDto,
  AccountingPeriodFormValues,
  AccountingPeriodListItem,
  AccountingPeriodListResponse,
  AccountingPeriodsFilters,
  AccountingPeriodsResult,
  AccountingPeriodStatusUpdateInput,
  AccountingSubPeriodStatusInput,
  GenerateNextAccountingPeriodResponse,
  GenericPagingRequest,
} from '@/features/accounting-periods/types';
import type { AccountingPeriodFormSchema } from '@/features/accounting-periods/schema';
import type { ActionStatus } from '@/features/customers/types';

const ENTITY_NAME = 'accountingPeriod';
const GENERIC_FIELDS: string[] = [
  'fiscalYear',
  'accountingPeriodStatus',
  'subAccountingPeriodType',
  'subAccountingPeriodProgress',
  'ongoingSubAccountingPeriods',
  'useSubAccountingPeriods',
  'regularUserLockOption',
  'customLockNumberDays',
  'customLockOption',
  'forceCustomDay',
  'forceOption',
  'accountingOperationAction',
  'startDate',
  'endDate',
];

export const DEFAULT_ACCOUNTING_PERIODS_PAGE_SIZE = 20;

const toArray = (value: unknown): AccountingPeriodDto[] => {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter((item): item is AccountingPeriodDto => Boolean(item));
};

const extractDtos = (payload: AccountingPeriodListResponse | null | undefined): AccountingPeriodDto[] => {
  if (!payload) {
    return [];
  }

  const direct =
    toArray(payload.accountingPeriods) ||
    toArray(payload.results) ||
    toArray(payload.list) ||
    toArray(payload.data);
  if (direct.length > 0) {
    return direct;
  }

  if (payload && typeof payload === 'object' && 'data' in payload) {
    const data = (payload as Record<string, unknown>).data;
    if (data && typeof data === 'object') {
      const nestedCandidates = [
        (data as Record<string, unknown>).accountingPeriods,
        (data as Record<string, unknown>).results,
        (data as Record<string, unknown>).list,
      ];
      for (const candidate of nestedCandidates) {
        const items = toArray(candidate);
        if (items.length > 0) {
          return items;
        }
      }
    }
  }

  return [];
};

const extractTotalRecords = (
  payload: AccountingPeriodListResponse | null | undefined,
  fallback: number,
): number => {
  if (!payload) {
    return fallback;
  }
  if (payload.paging?.totalNumberOfRecords !== undefined && payload.paging.totalNumberOfRecords !== null) {
    return Number(payload.paging.totalNumberOfRecords);
  }
  if (payload.totalNumberOfRecords !== undefined && payload.totalNumberOfRecords !== null) {
    return Number(payload.totalNumberOfRecords);
  }
  return fallback;
};

const mapDtoToListItem = (dto: AccountingPeriodDto, index: number): AccountingPeriodListItem => ({
  fiscalYear: dto.fiscalYear ?? `period-${index}`,
  status: dto.accountingPeriodStatus ?? undefined,
  subAccountingPeriodType: dto.subAccountingPeriodType ?? undefined,
  subAccountingPeriodProgress: dto.subAccountingPeriodProgress ?? undefined,
  ongoingSubAccountingPeriods: dto.ongoingSubAccountingPeriods ?? undefined,
  startDate: dto.startDate ?? undefined,
  endDate: dto.endDate ?? undefined,
  useSubAccountingPeriods: dto.useSubAccountingPeriods ?? undefined,
});

const mapDtoToDetail = (dto: AccountingPeriodDto): AccountingPeriodDetailValues => ({
  fiscalYear: dto.fiscalYear ?? '',
  useSubAccountingPeriods: Boolean(dto.useSubAccountingPeriods ?? false),
  subAccountingPeriodType: dto.subAccountingPeriodType ?? undefined,
  regularUserLockOption: dto.regularUserLockOption ?? undefined,
  customLockNumberDays: dto.customLockNumberDays ?? undefined,
  customLockOption: dto.customLockOption ?? undefined,
  forceCustomDay: dto.forceCustomDay ?? undefined,
  forceOption: dto.forceOption ?? undefined,
  accountingOperationAction: dto.accountingOperationAction ?? undefined,
  startDate: dto.startDate ?? undefined,
  endDate: dto.endDate ?? undefined,
  accountingPeriodStatus: dto.accountingPeriodStatus ?? undefined,
  subAccountingPeriodProgress: dto.subAccountingPeriodProgress ?? undefined,
  ongoingSubAccountingPeriods: dto.ongoingSubAccountingPeriods ?? undefined,
});

const mapFormToDto = (values: AccountingPeriodFormValues): AccountingPeriodDto => ({
  fiscalYear: values.fiscalYear,
  useSubAccountingPeriods: values.useSubAccountingPeriods,
  subAccountingPeriodType: values.subAccountingPeriodType,
  regularUserLockOption: values.regularUserLockOption,
  customLockNumberDays: values.customLockNumberDays,
  customLockOption: values.customLockOption,
  forceCustomDay: values.forceCustomDay,
  forceOption: values.forceOption,
  accountingOperationAction: values.accountingOperationAction,
  startDate: values.startDate,
  endDate: values.endDate,
});

const buildFiltersPayload = (filters: AccountingPeriodsFilters | null | undefined) => {
  if (!filters) {
    return undefined;
  }
  const payload: Record<string, unknown> = {};
  if (filters.query) {
    payload.fiscalYear = filters.query;
    payload.code = filters.query;
  }
  if (filters.status) {
    payload.accountingPeriodStatus = filters.status;
  }
  if (filters.subAccountingPeriodType) {
    payload.subAccountingPeriodType = filters.subAccountingPeriodType;
  }
  return Object.keys(payload).length > 0 ? payload : undefined;
};

const buildListRequest = ({
  filters,
  page,
  pageSize,
  sortBy,
  sortOrder,
}: UseAccountingPeriodsParams): GenericPagingRequest => {
  const request: GenericPagingRequest = {
    offset: page * pageSize,
    limit: pageSize,
    sortBy: sortBy ?? 'fiscalYear',
    sortOrder: sortOrder ?? 'DESCENDING',
    genericFields: GENERIC_FIELDS,
  };
  const filtersPayload = buildFiltersPayload(filters);
  if (filtersPayload) {
    request.filters = filtersPayload;
  }
  return request;
};

const extractActionStatus = (input: unknown): ActionStatus | undefined => {
  if (!input || typeof input !== 'object') {
    return undefined;
  }
  if ('status' in input || 'message' in input) {
    return input as ActionStatus;
  }
  if ('actionStatus' in input) {
    const candidate = (input as { actionStatus?: ActionStatus | null }).actionStatus;
    if (candidate) {
      return candidate;
    }
  }
  return undefined;
};

type UseAccountingPeriodsParams = {
  filters?: AccountingPeriodsFilters | null;
  page: number;
  pageSize: number;
  sortBy?: string;
  sortOrder?: 'ASCENDING' | 'DESCENDING';
};

export const useAccountingPeriods = (params: UseAccountingPeriodsParams) => {
  const queryKeyParams = {
    filters: params.filters
      ? {
          query: params.filters.query ?? null,
          status: params.filters.status ?? null,
          subAccountingPeriodType: params.filters.subAccountingPeriodType ?? null,
        }
      : null,
    page: params.page,
    pageSize: params.pageSize,
    sortBy: params.sortBy ?? null,
    sortOrder: params.sortOrder ?? null,
  } as const;

  return useQuery({
    queryKey: queryKeys.accountingPeriods.list(queryKeyParams),
    queryFn: async () => {
      const apiClient = getApiClient();
      const body = buildListRequest(params);
      const result = await apiClient.POST(
        '/api/rest/v2/generic/all/{entityName}' as never,
        {
          params: { path: { entityName: ENTITY_NAME } },
          body,
        } as never,
      );
      const payload = unwrapResponse<AccountingPeriodListResponse | null>(
        {
          data: (result.data ?? null) as AccountingPeriodListResponse | null,
          error: result.error,
        },
        'Unable to load accounting periods',
      );
      const dtos = extractDtos(payload);
      const items = dtos.map((dto, index) => mapDtoToListItem(dto, index));
      const totalRecords = extractTotalRecords(payload, items.length);
      return { items, paging: { totalRecords } } satisfies AccountingPeriodsResult;
    },
  });
};

export const useAccountingPeriod = (fiscalYear: string | null) =>
  useQuery({
    queryKey: queryKeys.accountingPeriods.detail(fiscalYear ?? 'unknown'),
    enabled: Boolean(fiscalYear),
    queryFn: async () => {
      if (!fiscalYear) {
        return null as AccountingPeriodDetailValues | null;
      }
      const apiClient = getApiClient();
      const body: GenericPagingRequest = {
        limit: 1,
        offset: 0,
        genericFields: GENERIC_FIELDS,
        filters: { fiscalYear },
      };
      const result = await apiClient.POST(
        '/api/rest/v2/generic/all/{entityName}' as never,
        {
          params: { path: { entityName: ENTITY_NAME } },
          body,
        } as never,
      );
      const payload = unwrapResponse<AccountingPeriodListResponse | null>(
        {
          data: (result.data ?? null) as AccountingPeriodListResponse | null,
          error: result.error,
        },
        'Unable to load accounting period',
      );
      const dto = extractDtos(payload)[0];
      return dto ? mapDtoToDetail(dto) : null;
    },
  });

export const useAccountingPeriodMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (fiscalYear?: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.accountingPeriods.root });
    if (fiscalYear) {
      queryClient.invalidateQueries({ queryKey: queryKeys.accountingPeriods.detail(fiscalYear) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: AccountingPeriodFormSchema) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST(
        '/api/rest/v2/accountingPeriodManagement/accountingPeriods' as never,
        { body: dto } as never,
      );
      const payload = unwrapResponse<ActionStatus | GenerateNextAccountingPeriodResponse | null>(
        {
          data: result.data as unknown as ActionStatus | GenerateNextAccountingPeriodResponse | null,
          error: result.error,
        },
        'Accounting period creation failed',
      );
      const actionStatus = extractActionStatus(payload);
      assertActionSuccess(actionStatus, 'Accounting period creation failed');
      invalidate(values.fiscalYear);
      return payload;
    },
  });

  const update = useMutation({
    mutationFn: async (values: AccountingPeriodFormSchema) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT(
        '/api/rest/v2/accountingPeriodManagement/accountingPeriods/{fiscalYear}' as never,
        {
          params: { path: { fiscalYear: values.fiscalYear } },
          body: dto,
        } as never,
      );
      const payload = unwrapResponse<ActionStatus | GenerateNextAccountingPeriodResponse | null>(
        {
          data: result.data as unknown as ActionStatus | GenerateNextAccountingPeriodResponse | null,
          error: result.error,
        },
        'Accounting period update failed',
      );
      const actionStatus = extractActionStatus(payload);
      assertActionSuccess(actionStatus, 'Accounting period update failed');
      invalidate(values.fiscalYear);
      return payload;
    },
  });

  return useMemo(() => ({ create, update }), [create, update]);
};

export const useAccountingPeriodStatusMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (fiscalYear: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.accountingPeriods.root });
    queryClient.invalidateQueries({ queryKey: queryKeys.accountingPeriods.detail(fiscalYear) });
  };

  const updateStatus = useMutation({
    mutationFn: async ({ fiscalYear, status }: AccountingPeriodStatusUpdateInput) => {
      const apiClient = getApiClient();
      const result = await apiClient.PUT(
        '/api/rest/v2/accountingPeriodManagement/accountingPeriods/{fiscalYear}/{status}' as never,
        { params: { path: { fiscalYear, status } } } as never,
      );
      const payload = unwrapResponse<ActionStatus | null>(
        { data: result.data as unknown as ActionStatus | null, error: result.error },
        'Unable to update accounting period status',
      );
      const actionStatus = extractActionStatus(payload);
      assertActionSuccess(actionStatus, 'Unable to update accounting period status');
      invalidate(fiscalYear);
      return payload;
    },
  });

  const updateAllUsersStatus = useMutation({
    mutationFn: async ({ fiscalYear, number, status, reason }: AccountingSubPeriodStatusInput) => {
      const apiClient = getApiClient();
      const result = await apiClient.PUT(
        '/api/rest/v2/accountingPeriodManagement/accountingPeriods/{fiscalYear}/subAccountingPeriods/{number}/allUsersStatus/{status}' as never,
        {
          params: {
            path: { fiscalYear, number, status },
            query: reason ? { reason } : undefined,
          },
        } as never,
      );
      const payload = unwrapResponse<ActionStatus | null>(
        { data: result.data as unknown as ActionStatus | null, error: result.error },
        'Unable to update sub-accounting period status',
      );
      const actionStatus = extractActionStatus(payload);
      assertActionSuccess(actionStatus, 'Unable to update sub-accounting period status');
      invalidate(fiscalYear);
      return payload;
    },
  });

  const updateRegularUsersStatus = useMutation({
    mutationFn: async ({ fiscalYear, number, status, reason }: AccountingSubPeriodStatusInput) => {
      const apiClient = getApiClient();
      const result = await apiClient.PUT(
        '/api/rest/v2/accountingPeriodManagement/accountingPeriods/{fiscalYear}/subAccountingPeriods/{number}/regularUsersStatus/{status}' as never,
        {
          params: {
            path: { fiscalYear, number, status },
            query: reason ? { reason } : undefined,
          },
        } as never,
      );
      const payload = unwrapResponse<ActionStatus | null>(
        { data: result.data as unknown as ActionStatus | null, error: result.error },
        'Unable to update regular users status',
      );
      const actionStatus = extractActionStatus(payload);
      assertActionSuccess(actionStatus, 'Unable to update regular users status');
      invalidate(fiscalYear);
      return payload;
    },
  });

  return useMemo(
    () => ({ updateStatus, updateAllUsersStatus, updateRegularUsersStatus }),
    [updateAllUsersStatus, updateRegularUsersStatus, updateStatus],
  );
};

export const useGenerateNextAccountingPeriod = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.POST(
        '/api/rest/v2/accountingPeriodManagement/accountingPeriods/generateNextAP' as never,
        {} as never,
      );
      const payload = unwrapResponse<GenerateNextAccountingPeriodResponse | null>(
        {
          data: result.data as unknown as GenerateNextAccountingPeriodResponse | null,
          error: result.error,
        },
        'Unable to generate next accounting period',
      );
      const actionStatus = extractActionStatus(payload);
      assertActionSuccess(actionStatus, 'Unable to generate next accounting period');
      queryClient.invalidateQueries({ queryKey: queryKeys.accountingPeriods.root });
      if (payload?.accountingPeriod?.fiscalYear) {
        queryClient.invalidateQueries({
          queryKey: queryKeys.accountingPeriods.detail(payload.accountingPeriod.fiscalYear),
        });
      }
      return payload?.accountingPeriod ? mapDtoToDetail(payload.accountingPeriod) : null;
    },
  });
};
