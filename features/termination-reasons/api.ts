import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  GetTerminationReasonResponse,
  TerminationReasonDto,
  TerminationReasonFormValues,
  TerminationReasonListItem,
} from '@/features/termination-reasons/types';

export const DEFAULT_TERMINATION_REASONS_PAGE_SIZE = 20;

const mapDtoToForm = (dto: TerminationReasonDto): TerminationReasonFormValues => ({
  code: dto.code,
  description: dto.description ?? undefined,
  applyAgreement: dto.applyAgreement ?? undefined,
  invoiceAgreementImmediately: dto.invoiceAgreementImmediately ?? undefined,
  applyReimbursment: dto.applyReimbursment ?? undefined,
  applyTerminationCharges: dto.applyTerminationCharges ?? undefined,
  overrideProrata: dto.overrideProrata ?? undefined,
  reimburseOneshots: dto.reimburseOneshots ?? undefined,
});

const mapFormToDto = (values: TerminationReasonFormValues): TerminationReasonDto => ({
  code: values.code,
  description: values.description,
  applyAgreement: values.applyAgreement,
  invoiceAgreementImmediately: values.invoiceAgreementImmediately,
  applyReimbursment: values.applyReimbursment,
  applyTerminationCharges: values.applyTerminationCharges,
  overrideProrata: values.overrideProrata,
  reimburseOneshots: values.reimburseOneshots,
  languageDescriptions: [],
});

const adaptList = (items: TerminationReasonDto[] | undefined): TerminationReasonListItem[] =>
  (items ?? []).map((item) => ({
    code: item.code,
    description: item.description ?? undefined,
    overrideProrata: item.overrideProrata ?? undefined,
    applyTerminationCharges: item.applyTerminationCharges ?? undefined,
  }));

export const useTerminationReasons = () =>
  useQuery({
    queryKey: queryKeys.terminationReasons.list(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/terminationReason/list');
      const payload = unwrapResponse<GetTerminationReasonResponse>(
        { data: result.data, error: result.error },
        'Unable to load termination reasons',
      );
      assertActionSuccess(payload.actionStatus, 'Termination reason list request failed');
      return adaptList(payload.terminationReason);
    },
  });

export const useTerminationReason = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.terminationReasons.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      if (!code) {
        return null;
      }
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/terminationReason', {
        params: { query: { terminationReasonCode: code } },
      });
      const payload = unwrapResponse<GetTerminationReasonResponse>(
        { data: result.data, error: result.error },
        'Unable to load termination reason',
      );
      assertActionSuccess(payload.actionStatus, 'Termination reason request failed');
      const dto = payload.terminationReason?.[0];
      return dto ? mapDtoToForm(dto) : null;
    },
  });

export const useTerminationReasonVersion = () =>
  useQuery({
    queryKey: queryKeys.terminationReasons.version(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/terminationReason/version');
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to load termination reason version',
      );
      assertActionSuccess(payload, 'Termination reason version request failed');
      return payload.message ?? '';
    },
  });

export const useTerminationReasonMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (code?: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.terminationReasons.list() });
    if (code) {
      queryClient.invalidateQueries({ queryKey: queryKeys.terminationReasons.detail(code) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: TerminationReasonFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/terminationReason', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Termination reason creation failed',
      );
      assertActionSuccess(payload, 'Termination reason creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const update = useMutation({
    mutationFn: async (values: TerminationReasonFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/terminationReason', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Termination reason update failed',
      );
      assertActionSuccess(payload, 'Termination reason update failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const upsert = useMutation({
    mutationFn: async (values: TerminationReasonFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/terminationReason/createOrUpdate', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Termination reason upsert failed',
      );
      assertActionSuccess(payload, 'Termination reason upsert failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/terminationReason/{terminationReasonCode}', {
        params: { path: { terminationReasonCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Termination reason deletion failed',
      );
      assertActionSuccess(payload, 'Termination reason deletion failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  return useMemo(
    () => ({
      create,
      update,
      upsert,
      remove,
    }),
    [create, remove, update, upsert],
  );
};
