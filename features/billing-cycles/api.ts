import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  BillingCycleDto,
  BillingCycleFormValues,
  BillingCycleListItem,
  BillingCyclesResponseDto,
  GetBillingCycleResponse,
} from '@/features/billing-cycles/types';

export const DEFAULT_BILLING_CYCLES_PAGE_SIZE = 20;

const adaptList = (items: BillingCycleDto[] | undefined): BillingCycleListItem[] =>
  (items ?? []).map((item) => ({
    code: item.code,
    description: item.description ?? undefined,
    calendar: item.calendar,
    type: item.type ?? undefined,
    invoiceDateDelay: item.invoiceDateDelay ?? undefined,
    dueDateDelay: item.dueDateDelay ?? undefined,
  }));

const mapDtoToForm = (dto: BillingCycleDto): BillingCycleFormValues => ({
  code: dto.code,
  description: dto.description ?? undefined,
  calendar: dto.calendar,
  invoiceDateDelayEL: dto.invoiceDateDelayEL,
  invoiceDateDelay: dto.invoiceDateDelay ?? undefined,
  dueDateDelay: dto.dueDateDelay ?? undefined,
  dueDateDelayEL: dto.dueDateDelayEL ?? undefined,
  type: dto.type ?? undefined,
  referenceDate: dto.referenceDate ?? undefined,
  invoicingThreshold: dto.invoicingThreshold ?? undefined,
  computeDatesAtValidation: dto.computeDatesAtValidation ?? undefined,
});

const mapFormToDto = (values: BillingCycleFormValues): BillingCycleDto => ({
  code: values.code,
  description: values.description,
  calendar: values.calendar,
  invoiceDateDelayEL: values.invoiceDateDelayEL,
  invoiceDateDelay: values.invoiceDateDelay,
  dueDateDelay: values.dueDateDelay,
  dueDateDelayEL: values.dueDateDelayEL,
  type: values.type,
  referenceDate: values.referenceDate,
  invoicingThreshold: values.invoicingThreshold,
  computeDatesAtValidation: values.computeDatesAtValidation,
});

export const useBillingCycles = () =>
  useQuery({
    queryKey: queryKeys.billingCycles.list(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/billingCycle/list');
      const payload = unwrapResponse<BillingCyclesResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load billing cycles',
      );
      assertActionSuccess(payload.actionStatus, 'Billing cycle list returned an error');
      return adaptList(payload.billingCycles?.billingCycle);
    },
  });

export const useBillingCycle = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.billingCycles.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/billingCycle', {
        params: { query: { billingCycleCode: code ?? '' } },
      });
      const payload = unwrapResponse<GetBillingCycleResponse>(
        { data: result.data, error: result.error },
        'Unable to load billing cycle',
      );
      assertActionSuccess(payload.actionStatus, 'Billing cycle retrieval failed');
      return payload.billingCycle ? mapDtoToForm(payload.billingCycle) : null;
    },
  });

export const useBillingCycleMutations = () => {
  const queryClient = useQueryClient();

  const create = useMutation({
    mutationFn: async (values: BillingCycleFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/billingCycle', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Billing cycle creation failed',
      );
      assertActionSuccess(payload, 'Billing cycle creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.billingCycles.list() });
      queryClient.invalidateQueries({ queryKey: queryKeys.billingCycles.detail(variables.code) });
    },
  });

  const upsert = useMutation({
    mutationFn: async (values: BillingCycleFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/billingCycle', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Billing cycle update failed',
      );
      assertActionSuccess(payload, 'Billing cycle update failed');
      return payload;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.billingCycles.list() });
      queryClient.invalidateQueries({ queryKey: queryKeys.billingCycles.detail(variables.code) });
    },
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/billingCycle/{billingCycleCode}', {
        params: { path: { billingCycleCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Billing cycle delete failed',
      );
      assertActionSuccess(payload, 'Billing cycle delete failed');
      return payload;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.billingCycles.list() });
    },
  });

  return useMemo(() => ({ create, upsert, remove }), [create, remove, upsert]);
};
