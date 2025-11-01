import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  InvoicingPlanDto,
  InvoicingPlanFormValues,
  InvoicingPlanListItem,
  InvoicingPlanResponseDto,
  InvoicingPlansResponseDto,
} from '@/features/invoicing-plans/types';

export const DEFAULT_INVOICING_PLAN_PAGE_SIZE = 20;

const adaptList = (items: InvoicingPlanDto[] | undefined): InvoicingPlanListItem[] =>
  (items ?? []).map((item) => ({
    code: item.code,
    description: item.description ?? undefined,
  }));

const mapDtoToForm = (dto: InvoicingPlanDto): InvoicingPlanFormValues => ({
  code: dto.code,
  description: dto.description ?? undefined,
  updatedCode: dto.updatedCode ?? undefined,
});

const mapFormToDto = (values: InvoicingPlanFormValues): InvoicingPlanDto => ({
  code: values.code,
  description: values.description,
  updatedCode: values.updatedCode,
});

export const useInvoicingPlans = () =>
  useQuery({
    queryKey: queryKeys.invoicingPlans.list(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/billing/invoicingPlans/list', {
        body: { paging: { offset: 0, limit: DEFAULT_INVOICING_PLAN_PAGE_SIZE } },
      });
      const payload = unwrapResponse<InvoicingPlansResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load invoicing plans',
      );
      assertActionSuccess(payload.actionStatus, 'Invoicing plans request failed');
      return adaptList(payload.invoicingPlans?.invoicingPlan);
    },
  });

export const useInvoicingPlan = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.invoicingPlans.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/billing/invoicingPlans', {
        params: { query: { invoicingPlanCode: code ?? '' } },
      });
      const payload = unwrapResponse<InvoicingPlanResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load invoicing plan',
      );
      assertActionSuccess(payload.actionStatus, 'Invoicing plan request failed');
      return payload.invoicingPlanDto ? mapDtoToForm(payload.invoicingPlanDto) : null;
    },
  });

export const useInvoicingPlanVersion = () =>
  useQuery({
    queryKey: queryKeys.invoicingPlans.version(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/billing/invoicingPlans/version');
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to load invoicing plan version',
      );
      assertActionSuccess(payload, 'Invoicing plan version request failed');
      return payload.message ?? '';
    },
  });

export const useInvoicingPlanMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (code?: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.invoicingPlans.list() });
    if (code) {
      queryClient.invalidateQueries({ queryKey: queryKeys.invoicingPlans.detail(code) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: InvoicingPlanFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/billing/invoicingPlans', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Invoicing plan creation failed',
      );
      assertActionSuccess(payload, 'Invoicing plan creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const update = useMutation({
    mutationFn: async (values: InvoicingPlanFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/billing/invoicingPlans', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Invoicing plan update failed',
      );
      assertActionSuccess(payload, 'Invoicing plan update failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/billing/invoicingPlans/{invoicingPlanCode}', {
        params: { path: { invoicingPlanCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Invoicing plan deletion failed',
      );
      assertActionSuccess(payload, 'Invoicing plan deletion failed');
      return payload;
    },
    onSuccess: () => invalidate(),
  });

  return useMemo(
    () => ({
      create,
      update,
      remove,
    }),
    [create, remove, update],
  );
};
