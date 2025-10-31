import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  GenericCodeDto,
  GenericCodeFormValues,
  GenericCodeListItem,
  GenericCodeResponseDto,
  GetGenericCodeResponseDto,
  SequenceDto,
  SequenceFormValues,
} from '@/features/generic-code/types';

export const DEFAULT_GENERIC_CODE_PAGE_SIZE = 20;

const toArray = (value?: GenericCodeDto | GenericCodeDto[]): GenericCodeDto[] => {
  if (!value) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
};

const adaptList = (items?: GenericCodeDto | GenericCodeDto[]): GenericCodeListItem[] =>
  toArray(items).map((item) => ({
    entityClass: item.entityClass ?? '',
    formatEL: item.formatEL ?? undefined,
    prefixOverride: item.prefixOverride ?? undefined,
    sequenceType: item.sequence?.sequenceType ?? undefined,
    sequencePattern: item.sequence?.sequencePattern ?? undefined,
  }));

const mapSequenceToForm = (sequence: SequenceDto | undefined): SequenceFormValues | undefined => {
  if (!sequence) {
    return undefined;
  }

  return {
    prefixEL: sequence.prefixEL ?? undefined,
    invoiceSequenceCode: sequence.invoiceSequenceCode ?? undefined,
    sequenceSize: sequence.sequenceSize ?? undefined,
    currentInvoiceNb: sequence.currentInvoiceNb ?? undefined,
    sequencePattern: sequence.sequencePattern ?? undefined,
    sequenceType: sequence.sequenceType ?? undefined,
  };
};

const mapDtoToForm = (dto: GenericCodeDto): GenericCodeFormValues => ({
  entityClass: dto.entityClass ?? '',
  formatEL: dto.formatEL ?? undefined,
  prefixOverride: dto.prefixOverride ?? undefined,
  sequence: mapSequenceToForm(dto.sequence),
});

const mapSequenceToDto = (sequence: SequenceFormValues | undefined): SequenceDto | undefined => {
  if (!sequence) {
    return undefined;
  }

  return {
    prefixEL: sequence.prefixEL,
    invoiceSequenceCode: sequence.invoiceSequenceCode,
    sequenceSize: sequence.sequenceSize,
    currentInvoiceNb: sequence.currentInvoiceNb,
    sequencePattern: sequence.sequencePattern,
    sequenceType: sequence.sequenceType,
  };
};

const mapFormToDto = (values: GenericCodeFormValues): GenericCodeDto => ({
  entityClass: values.entityClass,
  formatEL: values.formatEL,
  prefixOverride: values.prefixOverride,
  sequence: mapSequenceToDto(values.sequence),
});

export const useGenericCodes = (entityClass?: string) =>
  useQuery({
    queryKey: queryKeys.genericCodes.list(entityClass),
    queryFn: async () => {
      const apiClient = getApiClient();
      const params = entityClass ? { query: { entityClass } } : undefined;
      const result = await apiClient.GET('/api/rest/genericCode', { params });
      const payload = unwrapResponse<GetGenericCodeResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load generic codes',
      );
      return adaptList(payload.genericCodeDto);
    },
  });

export const useGenericCode = (entityClass: string | null) =>
  useQuery({
    queryKey: queryKeys.genericCodes.detail(entityClass ?? 'unknown'),
    enabled: Boolean(entityClass),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/genericCode', {
        params: { query: { entityClass: entityClass ?? '' } },
      });
      const payload = unwrapResponse<GetGenericCodeResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load generic code',
      );
      return payload.genericCodeDto ? mapDtoToForm(payload.genericCodeDto) : null;
    },
  });

export const useGenericCodeMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (entityClass?: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.genericCodes.list() });
    if (entityClass) {
      queryClient.invalidateQueries({ queryKey: queryKeys.genericCodes.list(entityClass) });
      queryClient.invalidateQueries({ queryKey: queryKeys.genericCodes.detail(entityClass) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: GenericCodeFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/genericCode', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Generic code creation failed',
      );
      assertActionSuccess(payload, 'Generic code creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.entityClass),
  });

  const update = useMutation({
    mutationFn: async (values: GenericCodeFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/genericCode', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Generic code update failed',
      );
      assertActionSuccess(payload, 'Generic code update failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.entityClass),
  });

  const createSequence = useMutation({
    mutationFn: async ({ entityClass, ...values }: SequenceFormValues & { entityClass: string }) => {
      const apiClient = getApiClient();
      const dto = mapSequenceToDto(values);
      const result = await apiClient.POST('/api/rest/genericCode/sequence', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Generic code sequence creation failed',
      );
      assertActionSuccess(payload, 'Generic code sequence creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.entityClass),
  });

  const generateCode = useMutation({
    mutationFn: async (values: GenericCodeFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/genericCode/generateCode', { body: dto });
      const payload = unwrapResponse<GenericCodeResponseDto>(
        { data: result.data, error: result.error },
        'Generic code generation failed',
      );
      assertActionSuccess(payload.actionStatus, 'Generic code generation failed');
      return payload;
    },
  });

  return {
    create,
    update,
    createSequence,
    generateCode,
  };
};

export const useGenericCodeVersion = () =>
  useQuery({
    queryKey: queryKeys.genericCodes.version(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/genericCode/version');
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to retrieve generic code version',
      );
      assertActionSuccess(payload, 'Unable to retrieve generic code version');
      return payload.message ?? '';
    },
    select: (message) => message,
  });

