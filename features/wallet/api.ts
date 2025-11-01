import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type {
  ActionStatus,
  FindWalletOperationsDto,
  FindWalletOperationsResponseDto,
  GetWalletTemplateResponseDto,
  PagingAndFiltering,
  WalletBalanceDto,
  WalletBalanceFormValues,
  WalletBalanceResult,
  WalletBalanceResponseDto,
  WalletOperationDto,
  WalletOperationFilters,
  WalletOperationFormValues,
  WalletOperationListItem,
  WalletOperationsResult,
  WalletReservationDto,
  WalletReservationFormValues,
  WalletTemplateDto,
  WalletTemplateFormValues,
} from '@/features/wallet/types';

export const DEFAULT_WALLET_OPERATIONS_PAGE_SIZE = 20;

const buildFiltersPayload = (
  filters?: WalletOperationFilters | null,
): NonNullable<PagingAndFiltering['filters']> | undefined => {
  if (!filters) {
    return undefined;
  }

  const payload: Record<string, unknown> = {};

  if (filters.query) {
    payload.code = filters.query;
  }

  if (filters.status) {
    payload.status = filters.status;
  }

  if (filters.userAccountCode) {
    payload.userAccountCode = filters.userAccountCode;
  }

  if (filters.walletTemplate) {
    payload.walletTemplate = filters.walletTemplate;
  }

  if (filters.fromDate) {
    payload.fromDate = filters.fromDate;
  }

  if (filters.toDate) {
    payload.toDate = filters.toDate;
  }

  return Object.keys(payload).length > 0
    ? (payload as NonNullable<PagingAndFiltering['filters']>)
    : undefined;
};

const buildPagingPayload = (options: {
  filters?: WalletOperationFilters | null;
  page: number;
  pageSize: number;
  sortBy?: string;
  sortOrder?: 'ASCENDING' | 'DESCENDING';
}): PagingAndFiltering => {
  const payload: PagingAndFiltering = {
    offset: options.page * options.pageSize,
    limit: options.pageSize,
    sortBy: options.sortBy ?? 'operationDate',
    sortOrder: options.sortOrder ?? 'DESCENDING',
  };

  const filtersPayload = buildFiltersPayload(options.filters);

  if (filtersPayload) {
    payload.filters = filtersPayload;
  }

  return payload;
};

const mapDtoToListItem = (operation: WalletOperationDto, index: number): WalletOperationListItem => ({
  id: operation.code ? `${operation.code}-${index}` : `wallet-operation-${index}`,
  code: operation.code ?? '—',
  description: operation.description ?? undefined,
  userAccount: operation.userAccount ?? undefined,
  walletTemplate: operation.walletTemplate ?? undefined,
  type: operation.type ?? undefined,
  status: operation.status ?? undefined,
  quantity: operation.quantity ?? undefined,
  unitAmountWithoutTax: operation.unitAmountWithoutTax ?? undefined,
  unitAmountWithTax: operation.unitAmountWithTax ?? undefined,
  amountWithoutTax: operation.amountWithoutTax ?? undefined,
  amountWithTax: operation.amountWithTax ?? undefined,
  amountTax: operation.amountTax ?? undefined,
  currency: operation.currency ?? undefined,
  operationDate: operation.operationDate ?? undefined,
  subscription: operation.subscription ?? undefined,
  offerCode: operation.offerCode ?? undefined,
});

const adaptListResponse = (
  payload: FindWalletOperationsResponseDto | null | undefined,
): WalletOperationsResult => {
  const items = payload?.walletOperations?.map((item, index) => mapDtoToListItem(item, index)) ?? [];
  const totalRecords = payload?.paging?.totalNumberOfRecords ?? items.length;

  return { items, totalRecords };
};

const adaptBalanceResponse = (
  payload: WalletBalanceResponseDto | null | undefined,
): WalletBalanceResult => ({
  amountWithTax: payload?.amounts?.amountWithTax ?? undefined,
  amountWithoutTax: payload?.amounts?.amountWithoutTax ?? undefined,
  message: payload?.actionStatus?.message ?? undefined,
});

const mapOperationFormToDto = (values: WalletOperationFormValues): WalletOperationDto => ({
  code: values.code,
  description: values.description,
  userAccount: values.userAccount,
  subscription: values.subscription,
  walletTemplate: values.walletTemplate,
  seller: values.seller,
  currency: values.currency,
  type: values.type,
  operationDate: values.operationDate,
  quantity: values.quantity,
  unitAmountWithoutTax: values.unitAmountWithoutTax,
  unitAmountWithTax: values.unitAmountWithTax,
  amountWithoutTax: values.amountWithoutTax,
  amountWithTax: values.amountWithTax,
  amountTax: values.amountTax,
});

const mapReservationFormToDto = (values: WalletReservationFormValues): WalletReservationDto => ({
  reservationId: values.reservationId,
  providerCode: values.providerCode,
  sellerCode: values.sellerCode,
  offerCode: values.offerCode,
  userAccountCode: values.userAccountCode,
  subscriptionDate: values.subscriptionDate,
  expirationDate: values.expirationDate,
  terminationDate: values.terminationDate,
  creditLimit: values.creditLimit,
  param1: values.param1,
  param2: values.param2,
  param3: values.param3,
  amountWithTax: values.amountWithTax,
});

const mapTemplateFormToDto = (values: WalletTemplateFormValues): WalletTemplateDto => ({
  code: values.code,
  description: values.description,
  walletType: values.walletType,
  fastRatingLevel: values.fastRatingLevel,
  lowBalanceLevel: values.lowBalanceLevel,
  rejectLevel: values.rejectLevel,
  rejectLevelEl: values.rejectLevelEl,
  lowBalanceLevelEl: values.lowBalanceLevelEl,
  codeOnly: false,
});

const mapTemplateDtoToForm = (dto: WalletTemplateDto): WalletTemplateFormValues => ({
  code: dto.code ?? '',
  description: dto.description ?? undefined,
  walletType: dto.walletType ?? undefined,
  fastRatingLevel: dto.fastRatingLevel ?? undefined,
  lowBalanceLevel: dto.lowBalanceLevel ?? undefined,
  rejectLevel: dto.rejectLevel ?? undefined,
  rejectLevelEl: dto.rejectLevelEl ?? undefined,
  lowBalanceLevelEl: dto.lowBalanceLevelEl ?? undefined,
});

export const useWalletOperations = (params: {
  filters?: WalletOperationFilters | null;
  page: number;
  pageSize: number;
  sortBy?: string;
  sortOrder?: 'ASCENDING' | 'DESCENDING';
}) => {
  const queryKeyParams = {
    filters: params.filters ?? null,
    page: params.page,
    pageSize: params.pageSize,
    sortBy: params.sortBy ?? null,
    sortOrder: params.sortOrder ?? null,
  } as const;

  return useQuery({
    queryKey: queryKeys.wallet.operations(queryKeyParams),
    queryFn: async () => {
      const apiClient = getApiClient();
      const body = buildPagingPayload(params);
      const result = await apiClient.POST('/api/rest/billing/wallet/operation/list', { body });
      const payload = unwrapResponse<FindWalletOperationsResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load wallet operations',
      );
      assertActionSuccess(payload?.actionStatus, 'Wallet operations request failed');
      return adaptListResponse(payload);
    },
  });
};

export const useWalletOperationsExport = () =>
  useMutation({
    mutationFn: async (filters?: WalletOperationFilters | null) => {
      const apiClient = getApiClient();
      const params: { query?: Record<string, unknown> } = {};
      if (filters?.query) {
        params.query = { code: filters.query };
      }
      const result = await apiClient.GET('/api/rest/billing/wallet/operation/listGetAll', params);
      const payload = unwrapResponse<FindWalletOperationsResponseDto>(
        { data: result.data, error: result.error },
        'Unable to export wallet operations',
      );
      assertActionSuccess(payload?.actionStatus, 'Wallet operations export failed');
      return adaptListResponse(payload);
    },
  });

export const useWalletOperationDetail = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.wallet.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      if (!code) {
        return null as WalletOperationListItem | null;
      }

      const apiClient = getApiClient();
      const body: PagingAndFiltering = {
        limit: 1,
        offset: 0,
      };
      const filters = buildFiltersPayload({ query: code });
      if (filters) {
        body.filters = filters;
      }

      const result = await apiClient.POST('/api/rest/billing/wallet/operation/list', { body });
      const payload = unwrapResponse<FindWalletOperationsResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load wallet operation detail',
      );
      assertActionSuccess(payload?.actionStatus, 'Wallet operation detail request failed');
      const operation = payload?.walletOperations?.[0];
      return operation ? mapDtoToListItem(operation, 0) : null;
    },
  });

export const useWalletOperationFind = () =>
  useMutation({
    mutationFn: async (criteria: FindWalletOperationsDto & { offset?: number; limit?: number }) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/billing/wallet/operation/find', {
        body: criteria,
        params: {
          query: {
            offset: criteria.offset,
            limit: criteria.limit,
          },
        },
      });
      const payload = unwrapResponse<FindWalletOperationsResponseDto>(
        { data: result.data, error: result.error },
        'Unable to find wallet operations',
      );
      assertActionSuccess(payload?.actionStatus, 'Wallet operations search failed');
      return adaptListResponse(payload);
    },
  });

const useWalletBalanceMutation = (endpoint: string) =>
  useMutation({
    mutationFn: async (criteria: WalletBalanceFormValues) => {
      const apiClient = getApiClient();
      const body: WalletBalanceDto = {
        sellerCode: criteria.sellerCode,
        customerCode: criteria.customerCode,
        customerAccountCode: criteria.customerAccountCode,
        billingAccountCode: criteria.billingAccountCode,
        userAccountCode: criteria.userAccountCode,
        startDate: criteria.startDate,
        endDate: criteria.endDate,
        walletCode: criteria.walletCode,
        amountWithTax: criteria.amountWithTax,
      };
      const result = await apiClient.POST(`/api/rest/billing/wallet/balance/${endpoint}`, { body });
      const payload = unwrapResponse<WalletBalanceResponseDto>(
        { data: result.data, error: result.error },
        'Unable to retrieve wallet balance',
      );
      assertActionSuccess(payload?.actionStatus, 'Wallet balance request failed');
      return adaptBalanceResponse(payload);
    },
  });

export const useWalletBalanceCurrent = () => useWalletBalanceMutation('current');
export const useWalletBalanceOpen = () => useWalletBalanceMutation('open');
export const useWalletBalanceReserved = () => useWalletBalanceMutation('reserved');

export const useWalletOperationCreate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (values: WalletOperationFormValues) => {
      const apiClient = getApiClient();
      const dto = mapOperationFormToDto(values);
      const result = await apiClient.POST('/api/rest/billing/wallet/operation', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to create wallet operation',
      );
      assertActionSuccess(payload, 'Wallet operation creation failed');
      return payload;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.wallet.root });
    },
  });
};

export const useWalletReservationMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = () => {
    queryClient.invalidateQueries({ queryKey: queryKeys.wallet.root });
  };

  const create = useMutation({
    mutationFn: async (values: WalletReservationFormValues) => {
      const apiClient = getApiClient();
      const dto = mapReservationFormToDto(values);
      const result = await apiClient.POST('/api/rest/billing/wallet/reservation', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to create wallet reservation',
      );
      assertActionSuccess(payload, 'Wallet reservation creation failed');
      return payload;
    },
    onSuccess: invalidate,
  });

  const update = useMutation({
    mutationFn: async (values: WalletReservationFormValues) => {
      const apiClient = getApiClient();
      const dto = mapReservationFormToDto(values);
      const result = await apiClient.PUT('/api/rest/billing/wallet/reservation', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to update wallet reservation',
      );
      assertActionSuccess(payload, 'Wallet reservation update failed');
      return payload;
    },
    onSuccess: invalidate,
  });

  const cancel = useMutation({
    mutationFn: async (reservationId: number | string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/billing/wallet/reservation/{reservationId}', {
        params: { path: { reservationId: Number(reservationId) } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to cancel wallet reservation',
      );
      assertActionSuccess(payload, 'Wallet reservation cancellation failed');
      return payload;
    },
    onSuccess: invalidate,
  });

  const confirm = useMutation({
    mutationFn: async (values: WalletReservationFormValues) => {
      const apiClient = getApiClient();
      const dto = mapReservationFormToDto(values);
      const result = await apiClient.POST('/api/rest/billing/wallet/reservation/confirm', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to confirm wallet reservation',
      );
      assertActionSuccess(payload, 'Wallet reservation confirmation failed');
      return payload;
    },
    onSuccess: invalidate,
  });

  return useMemo(
    () => ({ create, update, cancel, confirm }),
    [cancel, confirm, create, update],
  );
};

export const useWalletTemplate = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.wallet.templateDetail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      if (!code) {
        return null as WalletTemplateFormValues | null;
      }

      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/billing/wallet/template', {
        params: { query: { walletTemplateCode: code } },
      });
      const payload = unwrapResponse<GetWalletTemplateResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load wallet template',
      );
      assertActionSuccess(payload?.actionStatus, 'Wallet template request failed');
      return payload?.walletTemplate ? mapTemplateDtoToForm(payload.walletTemplate) : null;
    },
  });

export const useWalletTemplateMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (code?: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.wallet.root });
    if (code) {
      queryClient.invalidateQueries({ queryKey: queryKeys.wallet.templateDetail(code) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: WalletTemplateFormValues) => {
      const apiClient = getApiClient();
      const dto = mapTemplateFormToDto(values);
      const result = await apiClient.POST('/api/rest/billing/wallet/template', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to create wallet template',
      );
      assertActionSuccess(payload, 'Wallet template creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const update = useMutation({
    mutationFn: async (values: WalletTemplateFormValues) => {
      const apiClient = getApiClient();
      const dto = mapTemplateFormToDto(values);
      const result = await apiClient.PUT('/api/rest/billing/wallet/template', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to update wallet template',
      );
      assertActionSuccess(payload, 'Wallet template update failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const createOrUpdate = useMutation({
    mutationFn: async (values: WalletTemplateFormValues) => {
      const apiClient = getApiClient();
      const dto = mapTemplateFormToDto(values);
      const result = await apiClient.POST('/api/rest/billing/wallet/template/createOrUpdate', {
        body: dto,
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to create or update wallet template',
      );
      assertActionSuccess(payload, 'Wallet template createOrUpdate failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/billing/wallet/template/{walletTemplateCode}', {
        params: { path: { walletTemplateCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to delete wallet template',
      );
      assertActionSuccess(payload, 'Wallet template deletion failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  return useMemo(
    () => ({ create, update, createOrUpdate, remove }),
    [create, createOrUpdate, remove, update],
  );
};

export const useWalletVersion = () =>
  useQuery({
    queryKey: queryKeys.wallet.version(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/billing/wallet/version');
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to load wallet version',
      );
      assertActionSuccess(payload, 'Wallet version request failed');
      return payload.message ?? '';
    },
  });
