import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  GetCustomerAccountConfigurationResponseDto,
  GetCustomerConfigurationResponseDto,
  GetInvoicingConfigurationResponseDto,
  GetProviderResponse,
  GetTradingConfigurationResponseDto,
  ProviderDto,
  ProviderFormValues,
  ProviderTenantListItem,
  ProvidersResponse,
} from '@/features/provider/types';

const mapDtoToForm = (dto: ProviderDto | undefined): ProviderFormValues => ({
  code: dto?.code ?? undefined,
  description: dto?.description ?? undefined,
  currency: dto?.currency ?? undefined,
  country: dto?.country ?? undefined,
  language: dto?.language ?? undefined,
  multiCurrency: dto?.multiCurrency ?? undefined,
  multiCountry: dto?.multiCountry ?? undefined,
  multiLanguage: dto?.multiLanguage ?? undefined,
  enterprise: dto?.enterprise ?? undefined,
  rounding: dto?.rounding ?? undefined,
  roundingMode: dto?.roundingMode ?? undefined,
  invoiceRounding: dto?.invoiceRounding ?? undefined,
  invoiceRoundingMode: dto?.invoiceRoundingMode ?? undefined,
  discountAccountingCode: dto?.discountAccountingCode ?? undefined,
  email: dto?.email ?? undefined,
  recognizeRevenue: dto?.recognizeRevenue ?? undefined,
});

const mapFormToDto = (values: ProviderFormValues): ProviderDto => ({
  code: values.code,
  description: values.description,
  currency: values.currency,
  country: values.country,
  language: values.language,
  multiCurrency: values.multiCurrency,
  multiCountry: values.multiCountry,
  multiLanguage: values.multiLanguage,
  enterprise: values.enterprise,
  rounding: values.rounding,
  roundingMode: values.roundingMode,
  invoiceRounding: values.invoiceRounding,
  invoiceRoundingMode: values.invoiceRoundingMode,
  discountAccountingCode: values.discountAccountingCode,
  email: values.email,
  recognizeRevenue: values.recognizeRevenue,
});

const adaptTenants = (payload: ProvidersResponse | undefined): ProviderTenantListItem[] =>
  (payload?.providers ?? []).map((item) => ({
    code: item.code ?? '',
    description: item.description ?? undefined,
    currency: item.currency ?? undefined,
    country: item.country ?? undefined,
  }));

export const useProvider = () =>
  useQuery({
    queryKey: queryKeys.provider.detail(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/provider');
      const payload = unwrapResponse<GetProviderResponse>(
        { data: result.data, error: result.error },
        'Unable to load provider',
      );
      assertActionSuccess(payload.actionStatus, 'Provider request failed');
      return mapDtoToForm(payload.provider);
    },
  });

export const useProviderMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = () => {
    queryClient.invalidateQueries({ queryKey: queryKeys.provider.detail() });
    queryClient.invalidateQueries({ queryKey: queryKeys.provider.tenants() });
    queryClient.invalidateQueries({ queryKey: queryKeys.provider.customerConfiguration() });
    queryClient.invalidateQueries({ queryKey: queryKeys.provider.customerAccountConfiguration() });
    queryClient.invalidateQueries({ queryKey: queryKeys.provider.invoicingConfiguration() });
    queryClient.invalidateQueries({ queryKey: queryKeys.provider.tradingConfiguration() });
  };

  const update = useMutation({
    mutationFn: async (values: ProviderFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/provider', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Provider update failed',
      );
      assertActionSuccess(payload, 'Provider update failed');
      return payload;
    },
    onSuccess: () => invalidate(),
  });

  const create = useMutation({
    mutationFn: async (values: ProviderFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/provider', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Provider creation failed',
      );
      assertActionSuccess(payload, 'Provider creation failed');
      return payload;
    },
    onSuccess: () => invalidate(),
  });

  const upsert = useMutation({
    mutationFn: async (values: ProviderFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/provider/createOrUpdate', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Provider upsert failed',
      );
      assertActionSuccess(payload, 'Provider upsert failed');
      return payload;
    },
    onSuccess: () => invalidate(),
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/provider/{providerCode}', {
        params: { path: { providerCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Provider deletion failed',
      );
      assertActionSuccess(payload, 'Provider deletion failed');
      return payload;
    },
    onSuccess: () => invalidate(),
  });

  return useMemo(
    () => ({
      update,
      create,
      upsert,
      remove,
    }),
    [create, remove, update, upsert],
  );
};

export const useProviderTenants = () =>
  useQuery({
    queryKey: queryKeys.provider.tenants(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/provider/listTenants');
      const payload = unwrapResponse<ProvidersResponse>(
        { data: result.data, error: result.error },
        'Unable to load provider tenants',
      );
      assertActionSuccess(payload.actionStatus, 'Provider tenants request failed');
      return adaptTenants(payload);
    },
  });

export const useProviderCustomerConfiguration = () =>
  useQuery({
    queryKey: queryKeys.provider.customerConfiguration(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/provider/getCustomerConfiguration');
      const payload = unwrapResponse<GetCustomerConfigurationResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load customer configuration',
      );
      assertActionSuccess(payload.actionStatus, 'Customer configuration request failed');
      return payload;
    },
  });

export const useProviderCustomerAccountConfiguration = () =>
  useQuery({
    queryKey: queryKeys.provider.customerAccountConfiguration(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/provider/getCustomerAccountConfiguration');
      const payload = unwrapResponse<GetCustomerAccountConfigurationResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load customer account configuration',
      );
      assertActionSuccess(payload.actionStatus, 'Customer account configuration request failed');
      return payload;
    },
  });

export const useProviderInvoicingConfiguration = () =>
  useQuery({
    queryKey: queryKeys.provider.invoicingConfiguration(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/provider/getInvoicingConfiguration');
      const payload = unwrapResponse<GetInvoicingConfigurationResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load invoicing configuration',
      );
      assertActionSuccess(payload.actionStatus, 'Invoicing configuration request failed');
      return payload;
    },
  });

export const useProviderTradingConfiguration = () =>
  useQuery({
    queryKey: queryKeys.provider.tradingConfiguration(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/provider/getTradingConfiguration');
      const payload = unwrapResponse<GetTradingConfigurationResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load trading configuration',
      );
      assertActionSuccess(payload.actionStatus, 'Trading configuration request failed');
      return payload;
    },
  });
