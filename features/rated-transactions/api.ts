import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type {
  ActionStatus,
  PagingAndFiltering,
  RatedTransactionDto,
  RatedTransactionFilters,
  RatedTransactionListItem,
  RatedTransactionListResponseDto,
  RatedTransactionsResult,
} from '@/features/rated-transactions/types';

export const DEFAULT_RATED_TRANSACTIONS_PAGE_SIZE = 20;

const buildFiltersPayload = (
  filters?: RatedTransactionFilters | null,
): NonNullable<PagingAndFiltering['filters']> | undefined => {
  if (!filters) {
    return undefined;
  }

  const payload: Record<string, string> = {};

  if (filters.status) {
    payload.status = filters.status;
  }

  if (filters.userAccountCode) {
    payload.userAccountCode = filters.userAccountCode;
  }

  if (filters.query) {
    payload.code = filters.query;
  }

  return Object.keys(payload).length > 0
    ? (payload as unknown as NonNullable<PagingAndFiltering['filters']>)
    : undefined;
};

const buildPagingPayload = (options: {
  filters?: RatedTransactionFilters | null;
  page: number;
  pageSize: number;
  sortBy?: string;
  sortOrder?: 'ASCENDING' | 'DESCENDING';
}): PagingAndFiltering => {
  const payload: PagingAndFiltering = {
    offset: options.page * options.pageSize,
    limit: options.pageSize,
    sortBy: options.sortBy ?? 'usageDate',
    sortOrder: options.sortOrder ?? 'DESCENDING',
  };

  const filtersPayload = buildFiltersPayload(options.filters);

  if (filtersPayload) {
    payload.filters = filtersPayload;
  }

  return payload;
};

const mapDtoToListItem = (transaction: RatedTransactionDto, index: number): RatedTransactionListItem => ({
  id: transaction.code ? `${transaction.code}-${transaction.usageDate ?? index}` : `transaction-${index}`,
  code: transaction.code ?? '—',
  usageDate: transaction.usageDate ?? '',
  status: transaction.status ?? undefined,
  description: transaction.description ?? undefined,
  unityDescription: transaction.unityDescription ?? undefined,
  quantity: transaction.quantity ?? undefined,
  unitAmountWithoutTax: transaction.unitAmountWithoutTax ?? undefined,
  unitAmountWithTax: transaction.unitAmountWithTax ?? undefined,
  amountWithoutTax: transaction.amountWithoutTax ?? undefined,
  amountWithTax: transaction.amountWithTax ?? undefined,
  amountTax: transaction.amountTax ?? undefined,
  priceplanCode: transaction.priceplanCode ?? undefined,
  userAccountCode: transaction.userAccountCode ?? undefined,
  invoiceSubCategoryCode: transaction.invoiceSubCategoryCode ?? undefined,
  sellerCode: transaction.sellerCode ?? undefined,
  billingAccountCode: transaction.billingAccountCode ?? undefined,
});

const adaptListResponse = (payload: RatedTransactionListResponseDto | null | undefined): RatedTransactionsResult => {
  const items = payload?.ratedTransactions?.map((item, index) => mapDtoToListItem(item, index)) ?? [];
  const totalRecords = payload?.paging?.totalNumberOfRecords ?? items.length;

  return { items, totalRecords };
};

type UseRatedTransactionsParams = {
  filters?: RatedTransactionFilters | null;
  page: number;
  pageSize: number;
  sortBy?: string;
  sortOrder?: 'ASCENDING' | 'DESCENDING';
};

export const useRatedTransactions = (params: UseRatedTransactionsParams) => {
  const queryKeyParams = {
    filters: params.filters
      ? {
          query: params.filters.query ?? null,
          status: params.filters.status ?? null,
          userAccountCode: params.filters.userAccountCode ?? null,
        }
      : null,
    page: params.page,
    pageSize: params.pageSize,
    sortBy: params.sortBy ?? null,
    sortOrder: params.sortOrder ?? null,
  } as const;

  return useQuery({
    queryKey: queryKeys.ratedTransactions.list(queryKeyParams),
    queryFn: async () => {
      const apiClient = getApiClient();
      const body = buildPagingPayload(params);
      const result = await apiClient.POST('/api/rest/billing/ratedTransaction/list', { body });
      const payload = unwrapResponse<RatedTransactionListResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load rated transactions',
      );
      assertActionSuccess(payload?.actionStatus, 'Rated transactions request failed');
      return adaptListResponse(payload);
    },
  });
};

export const useRatedTransactionDetail = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.ratedTransactions.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      if (!code) {
        return null as RatedTransactionListItem | null;
      }

      const apiClient = getApiClient();
      const body: PagingAndFiltering = { limit: 1, offset: 0 };
      const filtersPayload = buildFiltersPayload({ query: code });

      if (filtersPayload) {
        body.filters = filtersPayload;
      }

      const result = await apiClient.POST('/api/rest/billing/ratedTransaction/list', { body });
      const payload = unwrapResponse<RatedTransactionListResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load rated transaction detail',
      );
      assertActionSuccess(payload?.actionStatus, 'Rated transaction detail request failed');
      const transaction = payload?.ratedTransactions?.[0];
      return transaction ? mapDtoToListItem(transaction, 0) : null;
    },
  });

export const useRatedTransactionsExport = () =>
  useMutation({
    mutationFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/billing/ratedTransaction/listGetAll');
      const payload = unwrapResponse<RatedTransactionListResponseDto>(
        { data: result.data, error: result.error },
        'Unable to export rated transactions',
      );
      assertActionSuccess(payload?.actionStatus, 'Rated transactions export failed');
      return adaptListResponse(payload);
    },
  });

export const useCancelRatedTransactions = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (filters: RatedTransactionFilters | null | undefined) => {
      const apiClient = getApiClient();
      const body: PagingAndFiltering = {};
      const filtersPayload = buildFiltersPayload(filters);

      if (filtersPayload) {
        body.filters = filtersPayload;
      }

      const result = await apiClient.POST('/api/rest/billing/ratedTransaction/cancelRatedTransactions', { body });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to cancel rated transactions',
      );
      assertActionSuccess(payload, 'Rated transactions cancellation failed');
      return payload;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.ratedTransactions.root });
    },
  });
};

export const useRatedTransactionVersion = () =>
  useQuery({
    queryKey: queryKeys.ratedTransactions.version(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/billing/ratedTransaction/version');
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to load rated transaction service version',
      );
      assertActionSuccess(payload, 'Rated transactions version request failed');
      return payload.message ?? '';
    },
  });
