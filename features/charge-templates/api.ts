import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import {
  chargeTemplateFormSchema,
  type ChargeTemplateFormSchema,
} from '@/features/charge-templates/schema';
import type {
  ActionStatus,
  ChargeTemplateFormValues,
  ChargeTemplateListItem,
  ChargeTemplateListParams,
  ChargeTemplateStatus,
  ChargeTemplateDto,
  GetChargeTemplateResponseDto,
} from '@/features/charge-templates/types';

const adaptList = (payload: GetChargeTemplateResponseDto | null | undefined): ChargeTemplateListItem[] => {
  const template = payload?.chargeTemplate;
  if (!template) {
    return [];
  }
  return [
    {
      code: template.code ?? '',
      description: template.description ?? undefined,
      invoiceSubCategory: template.invoiceSubCategory ?? undefined,
      status: template.status ?? undefined,
    },
  ];
};

const mapDtoToForm = (dto: ChargeTemplateDto): ChargeTemplateFormValues => ({
  code: dto.code,
  description: dto.description ?? '',
  invoiceSubCategory: dto.invoiceSubCategory ?? '',
  amountEditable: dto.amountEditable ?? false,
  ratingScriptCode: dto.ratingScriptCode ?? '',
  taxClassCode: dto.taxClassCode ?? '',
  status: dto.status ?? 'DRAFT',
  revenueRecognitionRuleCode: dto.revenueRecognitionRuleCode ?? '',
  unitMultiplicator: dto.unitMultiplicator != null ? String(dto.unitMultiplicator) : '',
  unitNbDecimal: dto.unitNbDecimal != null ? String(dto.unitNbDecimal) : '',
  dropZeroWo: dto.dropZeroWo ?? false,
});

export const useChargeTemplates = (params?: ChargeTemplateListParams) =>
  useQuery({
    queryKey: queryKeys.chargeTemplates.list(params ?? {}),
    queryFn: async () => {
      if (!params?.query) {
        return [] as ChargeTemplateListItem[];
      }
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/catalog/chargeTemplate', {
        params: { query: { chargeTemplateCode: params.query } },
      });
      const payload = unwrapResponse<GetChargeTemplateResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load charge template',
      );
      assertActionSuccess(payload?.actionStatus, 'Charge template request failed');
      return adaptList(payload);
    },
  });

export const useChargeTemplate = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.chargeTemplates.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      if (!code) {
        return null as ChargeTemplateFormValues | null;
      }
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/catalog/chargeTemplates/{chargeTemplateCode}', {
        params: { path: { chargeTemplateCode: code } },
      });
      const payload = unwrapResponse<GetChargeTemplateResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load charge template detail',
      );
      assertActionSuccess(payload?.actionStatus, 'Charge template detail failed');
      if (!payload?.chargeTemplate) {
        return null;
      }
      const parsed = chargeTemplateFormSchema.safeParse(mapDtoToForm(payload.chargeTemplate));
      return parsed.success ? parsed.data : mapDtoToForm(payload.chargeTemplate);
    },
  });

type UpdateStatusVariables = {
  code: string;
  status: ChargeTemplateStatus;
};

export const useChargeTemplateMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (code?: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.chargeTemplates.list() });
    queryClient.invalidateQueries({ queryKey: queryKeys.chargeTemplates.version() });
    if (code) {
      queryClient.invalidateQueries({ queryKey: queryKeys.chargeTemplates.detail(code) });
    }
  };

  const duplicate = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/catalog/chargeTemplates/{chargeTemplateCode}/duplicate', {
        params: { path: { chargeTemplateCode: code } },
      });
      const payload = unwrapResponse<GetChargeTemplateResponseDto>(
        { data: result.data, error: result.error },
        'Unable to duplicate charge template',
      );
      assertActionSuccess(payload?.actionStatus, 'Charge template duplication failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  const updateStatus = useMutation({
    mutationFn: async (variables: UpdateStatusVariables) => {
      const apiClient = getApiClient();
      const result = await apiClient.PUT('/api/rest/catalog/chargeTemplates/{chargeTemplateCode}/status/{status}', {
        params: {
          path: {
            chargeTemplateCode: variables.code,
            status: variables.status,
          },
        },
      });
      const payload = unwrapResponse<GetChargeTemplateResponseDto>(
        { data: result.data, error: result.error },
        'Unable to update charge template status',
      );
      assertActionSuccess(payload?.actionStatus, 'Charge template status update failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  return useMemo(() => ({ duplicate, updateStatus }), [duplicate, updateStatus]);
};

export const useChargeTemplateVersion = () =>
  useQuery({
    queryKey: queryKeys.chargeTemplates.version(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/catalog/version');
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to load charge template version',
      );
      assertActionSuccess(payload, 'Charge template version request failed');
      return payload.message ?? '';
    },
  });
