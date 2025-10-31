import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  GetInvoiceTypeResponse,
  GetInvoiceTypesResponse,
  InvoiceTypeDto,
  InvoiceTypeFormValues,
  InvoiceTypeListItem,
} from '@/features/invoice-types/types';

export const DEFAULT_INVOICE_TYPE_PAGE_SIZE = 20;

const adaptList = (items: InvoiceTypeDto[] | undefined): InvoiceTypeListItem[] =>
  (items ?? []).map((item) => ({
    code: item.code ?? '',
    description: item.description ?? undefined,
    occTemplateCode: item.occTemplateCode ?? '',
    occTemplateNegativeCode: item.occTemplateNegativeCode ?? undefined,
    matchingAuto: item.matchingAuto ?? undefined,
    invoiceAccountable: item.invoiceAccountable ?? undefined,
    useSelfSequence: item.useSelfSequence ?? undefined,
  }));

const mapDtoToForm = (dto: InvoiceTypeDto): InvoiceTypeFormValues => ({
  code: dto.code ?? '',
  description: dto.description ?? undefined,
  occTemplateCode: dto.occTemplateCode ?? '',
  occTemplateNegativeCode: dto.occTemplateNegativeCode ?? undefined,
  invoiceValidationScriptCode: dto.invoiceValidationScriptCode ?? undefined,
  customInvoiceXmlScriptInstanceCode: dto.customInvoiceXmlScriptInstanceCode ?? undefined,
  billingTemplateName: dto.billingTemplateName ?? undefined,
  emailTemplateCode: dto.emailTemplateCode ?? undefined,
  matchingAuto: dto.matchingAuto ?? undefined,
  invoiceAccountable: dto.invoiceAccountable ?? undefined,
  useSelfSequence: dto.useSelfSequence ?? undefined,
});

const mapFormToDto = (values: InvoiceTypeFormValues): InvoiceTypeDto => ({
  code: values.code,
  description: values.description,
  occTemplateCode: values.occTemplateCode,
  occTemplateNegativeCode: values.occTemplateNegativeCode,
  invoiceValidationScriptCode: values.invoiceValidationScriptCode,
  customInvoiceXmlScriptInstanceCode: values.customInvoiceXmlScriptInstanceCode,
  billingTemplateName: values.billingTemplateName,
  emailTemplateCode: values.emailTemplateCode,
  matchingAuto: values.matchingAuto,
  invoiceAccountable: values.invoiceAccountable,
  useSelfSequence: values.useSelfSequence,
});

export const useInvoiceTypes = () =>
  useQuery({
    queryKey: queryKeys.invoiceTypes.list(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/invoiceType/list');
      const payload = unwrapResponse<GetInvoiceTypesResponse>(
        { data: result.data, error: result.error },
        'Unable to load invoice types',
      );
      assertActionSuccess(payload.actionStatus, 'Invoice types request failed');
      return adaptList(payload.invoiceTypesDto?.invoiceTypes);
    },
  });

export const useInvoiceType = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.invoiceTypes.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/invoiceType', {
        params: { query: { invoiceTypeCode: code ?? '' } },
      });
      const payload = unwrapResponse<GetInvoiceTypeResponse>(
        { data: result.data, error: result.error },
        'Unable to load invoice type',
      );
      assertActionSuccess(payload.actionStatus, 'Invoice type request failed');
      return payload.invoiceTypeDto ? mapDtoToForm(payload.invoiceTypeDto) : null;
    },
  });

export const useInvoiceTypeMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (code?: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.invoiceTypes.list() });
    if (code) {
      queryClient.invalidateQueries({ queryKey: queryKeys.invoiceTypes.detail(code) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: InvoiceTypeFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/invoiceType', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Invoice type creation failed',
      );
      assertActionSuccess(payload, 'Invoice type creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const update = useMutation({
    mutationFn: async (values: InvoiceTypeFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/invoiceType', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Invoice type update failed',
      );
      assertActionSuccess(payload, 'Invoice type update failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/invoiceType/{invoiceTypeCode}', {
        params: { path: { invoiceTypeCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Invoice type deletion failed',
      );
      assertActionSuccess(payload, 'Invoice type deletion failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  const upsert = useMutation({
    mutationFn: async (values: InvoiceTypeFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/invoiceType/createOrUpdate', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Invoice type upsert failed',
      );
      assertActionSuccess(payload, 'Invoice type upsert failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  return useMemo(
    () => ({
      create,
      update,
      remove,
      upsert,
    }),
    [create, remove, upsert, update],
  );
};
