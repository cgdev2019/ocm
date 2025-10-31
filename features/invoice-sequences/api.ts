import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  GetInvoiceSequenceResponse,
  GetInvoiceSequencesResponse,
  InvoiceSequenceDto,
  InvoiceSequenceFormValues,
  InvoiceSequenceListItem,
} from '@/features/invoice-sequences/types';

export const DEFAULT_INVOICE_SEQUENCE_PAGE_SIZE = 20;

const adaptList = (items: InvoiceSequenceDto[] | undefined): InvoiceSequenceListItem[] =>
  (items ?? []).map((item) => ({
    code: item.code ?? '',
    description: item.description ?? undefined,
    sequencePattern: item.sequencePattern ?? undefined,
    sequenceType: item.sequenceType ?? undefined,
    sequenceSize: item.sequenceSize ?? undefined,
    currentInvoiceNb: item.currentInvoiceNb ?? undefined,
  }));

const mapDtoToForm = (dto: InvoiceSequenceDto): InvoiceSequenceFormValues => ({
  code: dto.code ?? '',
  description: dto.description ?? undefined,
  sequencePattern: dto.sequencePattern ?? undefined,
  sequenceType: dto.sequenceType ?? undefined,
  sequenceSize: dto.sequenceSize ?? undefined,
  currentInvoiceNb: dto.currentInvoiceNb ?? undefined,
});

const mapFormToDto = (values: InvoiceSequenceFormValues): InvoiceSequenceDto => ({
  code: values.code,
  description: values.description,
  sequencePattern: values.sequencePattern,
  sequenceType: values.sequenceType,
  sequenceSize: values.sequenceSize,
  currentInvoiceNb: values.currentInvoiceNb,
});

export const useInvoiceSequences = () =>
  useQuery({
    queryKey: queryKeys.invoiceSequences.list(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/invoiceSequence/list');
      const payload = unwrapResponse<GetInvoiceSequencesResponse>(
        { data: result.data, error: result.error },
        'Unable to load invoice sequences',
      );
      assertActionSuccess(payload.actionStatus, 'Invoice sequences request failed');
      return adaptList(payload.invoiceSequencesDto?.invoiceSequences);
    },
  });

export const useInvoiceSequence = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.invoiceSequences.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/invoiceSequence', {
        params: { query: { invoiceSequenceCode: code ?? '' } },
      });
      const payload = unwrapResponse<GetInvoiceSequenceResponse>(
        { data: result.data, error: result.error },
        'Unable to load invoice sequence',
      );
      assertActionSuccess(payload.actionStatus, 'Invoice sequence request failed');
      return payload.invoiceSequenceDto ? mapDtoToForm(payload.invoiceSequenceDto) : null;
    },
  });

export const useInvoiceSequenceMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (code?: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.invoiceSequences.list() });
    if (code) {
      queryClient.invalidateQueries({ queryKey: queryKeys.invoiceSequences.detail(code) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: InvoiceSequenceFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/invoiceSequence', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Invoice sequence creation failed',
      );
      assertActionSuccess(payload, 'Invoice sequence creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const update = useMutation({
    mutationFn: async (values: InvoiceSequenceFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/invoiceSequence', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Invoice sequence update failed',
      );
      assertActionSuccess(payload, 'Invoice sequence update failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const upsert = useMutation({
    mutationFn: async (values: InvoiceSequenceFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/invoiceSequence/createOrUpdate', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Invoice sequence upsert failed',
      );
      assertActionSuccess(payload, 'Invoice sequence upsert failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  return {
    create,
    update,
    upsert,
  };
};
