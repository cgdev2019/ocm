import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type {
  AgedReceivableDto,
  AgedReceivableListItem,
  AgedReceivablesFilters,
  AgedReceivablesResponseDto,
  AgedReceivablesResult,
} from '@/features/aged-receivables/types';

export const DEFAULT_AGED_RECEIVABLES_PAGE_SIZE = 20;

const getFromApi = async <T>(path: string, options?: Record<string, unknown>) => {
  const client = getApiClient() as unknown as {
    GET: (input: string, opts?: Record<string, unknown>) => Promise<{ data?: T; error?: unknown }>;
  };
  return client.GET(path, options);
};

const normalizeString = (value?: string | null) => {
  if (typeof value !== 'string') {
    return undefined;
  }
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
};

const normalizeNumber = (value: unknown) => {
  if (typeof value === 'number') {
    return Number.isNaN(value) ? undefined : value;
  }
  if (typeof value === 'string' && value.trim().length > 0) {
    const parsed = Number(value.trim());
    return Number.isNaN(parsed) ? undefined : parsed;
  }
  return undefined;
};

const collectBucketLabels = (payload: AgedReceivablesResponseDto | null | undefined) => {
  const labels = new Set<string>();

  payload?.bucketLabels?.forEach((label) => {
    const normalized = normalizeString(label);
    if (normalized) {
      labels.add(normalized);
    }
  });

  payload?.agedReceivables?.forEach((item) => {
    item?.buckets?.forEach((bucket) => {
      const normalized = normalizeString(bucket?.label ?? undefined);
      if (normalized) {
        labels.add(normalized);
      }
    });
  });

  return Array.from(labels);
};

const mapDtoToListItem = (
  dto: AgedReceivableDto,
  index: number,
  bucketLabels: string[],
): AgedReceivableListItem => {
  const bucketAmounts = bucketLabels.reduce<Record<string, number | null | undefined>>((acc, label) => {
    const bucket = dto.buckets?.find((item) => normalizeString(item?.label ?? undefined) === label);
    acc[label] = bucket ? normalizeNumber(bucket.amount ?? undefined) ?? 0 : 0;
    return acc;
  }, {});

  return {
    id:
      normalizeString(typeof dto.id === 'string' ? dto.id : dto.invoiceNumber) ??
      (typeof dto.id === 'number' ? String(dto.id) : `aged-${index}`),
    customerAccountCode: normalizeString(dto.customerAccountCode ?? undefined),
    customerAccountDescription: normalizeString(dto.customerAccountDescription ?? undefined),
    sellerCode: normalizeString(dto.sellerCode ?? undefined),
    sellerDescription: normalizeString(dto.sellerDescription ?? undefined),
    invoiceNumber: normalizeString(dto.invoiceNumber ?? undefined),
    invoiceDate: normalizeString(dto.invoiceDate ?? undefined),
    dueDate: normalizeString(dto.dueDate ?? undefined),
    tradingCurrency: normalizeString(dto.tradingCurrency ?? undefined),
    funcCurrency: normalizeString(dto.funcCurrency ?? undefined),
    notDueAmount: normalizeNumber(dto.notDueAmount ?? undefined),
    totalAmount: normalizeNumber(dto.totalAmount ?? undefined),
    bucketAmounts,
  };
};

const adaptResponse = (payload: AgedReceivablesResponseDto | null | undefined): AgedReceivablesResult => {
  const bucketLabels = collectBucketLabels(payload);
  const items = (payload?.agedReceivables ?? []).map((dto, index) =>
    mapDtoToListItem(dto, index, bucketLabels),
  );
  const totalRecords = normalizeNumber(payload?.paging?.totalNumberOfRecords) ?? items.length;

  return { items, totalRecords, bucketLabels };
};

type UseAgedReceivablesParams = {
  filters?: AgedReceivablesFilters | null;
  page: number;
  pageSize: number;
  sortBy?: string;
  sortOrder?: 'ASCENDING' | 'DESCENDING';
};

const buildQueryParams = (params: UseAgedReceivablesParams) => {
  const query: Record<string, string | number> = {
    offset: params.page * params.pageSize,
    limit: params.pageSize,
  };

  if (params.sortBy) {
    query.sortBy = params.sortBy;
  }

  if (params.sortOrder) {
    query.sortOrder = params.sortOrder;
  }

  const filters = params.filters;

  if (!filters) {
    return query;
  }

  if (filters.customerAccountCode) {
    query.customerAccountCode = filters.customerAccountCode;
  }
  if (filters.customerAccountDescription) {
    query.customerAccountDescription = filters.customerAccountDescription;
  }
  if (filters.sellerCode) {
    query.sellerCode = filters.sellerCode;
  }
  if (filters.sellerDescription) {
    query.sellerDescription = filters.sellerDescription;
  }
  if (filters.invoiceNumber) {
    query.invoiceNumber = filters.invoiceNumber;
  }
  if (filters.startDate) {
    query.startDate = filters.startDate;
  }
  if (filters.startDueDate) {
    query.startDueDate = filters.startDueDate;
  }
  if (filters.endDueDate) {
    query.endDueDate = filters.endDueDate;
  }
  if (filters.tradingCurrency) {
    query.tradingCurrency = filters.tradingCurrency;
  }
  if (filters.funcCurrency) {
    query.funcCurrency = filters.funcCurrency;
  }
  if (typeof filters.stepInDays === 'number') {
    query.stepInDays = filters.stepInDays;
  }
  if (typeof filters.numberOfPeriods === 'number') {
    query.numberOfPeriods = filters.numberOfPeriods;
  }

  return query;
};

export const useAgedReceivables = (params: UseAgedReceivablesParams) => {
  const queryKeyParams = {
    filters: params.filters
      ? {
          customerAccountCode: params.filters.customerAccountCode ?? null,
          customerAccountDescription: params.filters.customerAccountDescription ?? null,
          sellerCode: params.filters.sellerCode ?? null,
          sellerDescription: params.filters.sellerDescription ?? null,
          invoiceNumber: params.filters.invoiceNumber ?? null,
          startDate: params.filters.startDate ?? null,
          startDueDate: params.filters.startDueDate ?? null,
          endDueDate: params.filters.endDueDate ?? null,
          tradingCurrency: params.filters.tradingCurrency ?? null,
          funcCurrency: params.filters.funcCurrency ?? null,
          stepInDays: params.filters.stepInDays ?? null,
          numberOfPeriods: params.filters.numberOfPeriods ?? null,
        }
      : null,
    page: params.page,
    pageSize: params.pageSize,
    sortBy: params.sortBy ?? null,
    sortOrder: params.sortOrder ?? null,
  } as const;

  return useQuery<AgedReceivablesResult, Error, AgedReceivablesResult>({
    queryKey: queryKeys.agedReceivables.list(queryKeyParams),
    placeholderData: keepPreviousData,
    queryFn: async () => {
      const query = buildQueryParams(params);
      const result = await getFromApi<AgedReceivablesResponseDto>(
        '/api/rest/v2/standardReports/AgedReceivables',
        {
          params: { query },
        },
      );
      const payload = unwrapResponse<AgedReceivablesResponseDto | null>(
        { data: result.data, error: result.error },
        'Unable to load aged receivables',
      );
      assertActionSuccess(payload?.actionStatus ?? undefined, 'Aged receivables request failed');
      return adaptResponse(payload ?? undefined);
    },
  });
};
