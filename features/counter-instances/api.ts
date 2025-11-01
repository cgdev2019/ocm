import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import { counterInstanceFormSchema } from '@/features/counter-instances/schema';
import { parseAccumulatedValuesJson } from '@/features/counter-instances/utils';
import type {
  CounterInstanceDetail,
  CounterInstanceDto,
  CounterInstanceFormValues,
  CounterInstanceListParams,
  CounterInstanceListResponse,
  CounterInstanceListResult,
  CounterPeriodDto,
  CounterPeriodFormValues,
  GenericPagingRequest,
} from '@/features/counter-instances/types';

export const DEFAULT_COUNTER_INSTANCES_PAGE_SIZE = 50;

const ENTITY_NAME = 'CounterInstance';
const GENERIC_FIELDS = [
  'code',
  'counterTemplateCode',
  'chargeInstanceCode',
  'userAccountCode',
  'subscriptionCode',
  'id',
] as const;
const DEFAULT_SORT_FIELD = 'auditable.created';
const DEFAULT_SORT_ORDER: GenericPagingRequest['sortOrder'] = 'DESCENDING';

const trimString = (value: unknown): string | undefined => {
  if (typeof value !== 'string') {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
};

const normalizeCode = (code: unknown): string => trimString(code) ?? '';

const ensureCode = (code: string | null | undefined, message: string): string => {
  const normalized = normalizeCode(code);
  if (!normalized) {
    throw new Error(message);
  }
  return normalized;
};

const buildListRequest = (params: CounterInstanceListParams): GenericPagingRequest => {
  const page = Number.isFinite(params.page) && params.page > 0 ? Math.floor(params.page) : 0;
  const pageSize =
    Number.isFinite(params.pageSize) && params.pageSize > 0
      ? Math.floor(params.pageSize)
      : DEFAULT_COUNTER_INSTANCES_PAGE_SIZE;

  const request: GenericPagingRequest = {
    limit: pageSize,
    offset: page * pageSize,
    genericFields: [...GENERIC_FIELDS],
    sortBy: DEFAULT_SORT_FIELD,
    sortOrder: DEFAULT_SORT_ORDER,
  };

  const search = trimString(params.search ?? undefined);
  if (search) {
    const lowered = search.toLowerCase();
    request.filters = {
      code: lowered,
      counterTemplateCode: lowered,
      userAccountCode: lowered,
      subscriptionCode: lowered,
    };
  }

  return request;
};

const buildDetailRequest = (code: string): GenericPagingRequest => ({
  limit: 1,
  offset: 0,
  genericFields: [...GENERIC_FIELDS],
  filters: { code },
});

const collectDtos = (payload: CounterInstanceListResponse | null | undefined): CounterInstanceDto[] => {
  if (!payload) {
    return [];
  }

  const candidates: Array<CounterInstanceDto[] | null | undefined> = [
    payload.data,
    payload.results,
    payload.list,
    Array.isArray(payload.counterInstances) ? payload.counterInstances : undefined,
    payload.countersInstances?.counterInstance,
  ];

  for (const candidate of candidates) {
    if (Array.isArray(candidate) && candidate.length > 0) {
      return candidate.filter((item): item is CounterInstanceDto => Boolean(item));
    }
  }

  return [];
};

const extractTotalRecords = (
  payload: CounterInstanceListResponse | null | undefined,
  fallback: number,
): number => {
  if (!payload) {
    return fallback;
  }

  const pagingTotal = payload.paging?.totalNumberOfRecords;
  if (typeof pagingTotal === 'number' && pagingTotal >= 0) {
    return pagingTotal;
  }

  if (typeof payload.totalNumberOfRecords === 'number' && payload.totalNumberOfRecords >= 0) {
    return payload.totalNumberOfRecords;
  }

  return fallback;
};

const createEmptyCounterPeriod = (): CounterPeriodFormValues => ({
  code: '',
  counterType: '',
  level: '',
  periodStartDate: '',
  periodEndDate: '',
  value: '',
  accumulator: false,
  accumulatorType: '',
  accumulatedValuesJson: '',
});

const formatCounterPeriodValue = (value: number | null | undefined): string | undefined => {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value.toString();
  }
  return undefined;
};

const mapCounterPeriodDtoToForm = (dto: CounterPeriodDto): CounterPeriodFormValues => ({
  id: typeof dto.id === 'number' && Number.isFinite(dto.id) ? dto.id : undefined,
  code: trimString(dto.code),
  counterType: dto.counterType ?? '',
  level: formatCounterPeriodValue(dto.level),
  periodStartDate: trimString(dto.periodStartDate),
  periodEndDate: trimString(dto.periodEndDate),
  value: formatCounterPeriodValue(dto.value),
  accumulator: Boolean(dto.accumulator),
  accumulatorType: dto.accumulatorType ?? '',
  accumulatedValuesJson: dto.accumulatedValues ? JSON.stringify(dto.accumulatedValues) : '',
});

const mapDtoToListItem = (
  dto: CounterInstanceDto,
  fallbackIndex: number,
): CounterInstanceListResult['items'][number] => {
  const code = normalizeCode(dto.code);
  const counterTemplateCode = trimString(dto.counterTemplateCode);
  const userAccountCode = trimString(dto.userAccountCode);
  const subscriptionCode = trimString(dto.subscriptionCode);
  const chargeInstanceCode = trimString(dto.chargeInstanceCode);
  const id = typeof dto.id === 'number' && Number.isFinite(dto.id) ? dto.id : undefined;
  const counterPeriodsCount = Array.isArray(dto.counterPeriods) ? dto.counterPeriods.length : 0;

  const resolvedCode = code || `__counter-instance-${fallbackIndex}`;

  return {
    code: resolvedCode,
    ...(counterTemplateCode ? { counterTemplateCode } : {}),
    ...(userAccountCode ? { userAccountCode } : {}),
    ...(subscriptionCode ? { subscriptionCode } : {}),
    ...(chargeInstanceCode ? { chargeInstanceCode } : {}),
    ...(typeof id === 'number' ? { id } : {}),
    counterPeriodsCount,
  } satisfies CounterInstanceListResult['items'][number];
};

const mapDtoToDetail = (dto: CounterInstanceDto): CounterInstanceDetail => {
  const counterPeriods = Array.isArray(dto.counterPeriods)
    ? dto.counterPeriods.map(mapCounterPeriodDtoToForm)
    : [];

  const base: CounterInstanceFormValues = {
    id: typeof dto.id === 'number' && Number.isFinite(dto.id) ? dto.id : undefined,
    code: normalizeCode(dto.code),
    counterTemplateCode: trimString(dto.counterTemplateCode) ?? '',
    chargeInstanceCode: trimString(dto.chargeInstanceCode),
    productCode: trimString(dto.productCode),
    userAccountCode: trimString(dto.userAccountCode),
    customerAccountCode: trimString(dto.customerAccountCode),
    billingAccountCode: trimString(dto.billingAccountCode),
    subscriptionCode: trimString(dto.subscriptionCode),
    counterPeriods: counterPeriods.length > 0 ? counterPeriods : [createEmptyCounterPeriod()],
  };

  const parsed = counterInstanceFormSchema.safeParse(base);
  return parsed.success ? parsed.data : base;
};

const parseNumericField = (value: string | undefined, fieldName: string): number | undefined => {
  if (!value) {
    return undefined;
  }

  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    throw new Error(`Invalid numeric value for ${fieldName}`);
  }
  return parsed;
};

const mapCounterPeriodFormToDto = (
  values: CounterPeriodFormValues,
): CounterPeriodDto => {
  const code = trimString(values.code);
  const periodStartDate = trimString(values.periodStartDate);
  const periodEndDate = trimString(values.periodEndDate);
  const level = parseNumericField(values.level, 'counter period level');
  const periodValue = parseNumericField(values.value, 'counter period value');
  const accumulatedValues = parseAccumulatedValuesJson(values.accumulatedValuesJson);

  return {
    ...(typeof values.id === 'number' ? { id: values.id } : {}),
    ...(code ? { code } : {}),
    ...(values.counterType ? { counterType: values.counterType } : {}),
    ...(level !== undefined ? { level } : {}),
    ...(periodStartDate ? { periodStartDate } : {}),
    ...(periodEndDate ? { periodEndDate } : {}),
    ...(periodValue !== undefined ? { value: periodValue } : {}),
    ...(values.accumulator !== undefined ? { accumulator: values.accumulator } : {}),
    ...(values.accumulatorType ? { accumulatorType: values.accumulatorType } : {}),
    ...(accumulatedValues ? { accumulatedValues } : {}),
  } satisfies CounterPeriodDto;
};

const mapCounterInstanceFormToDto = (
  values: CounterInstanceFormValues,
): CounterInstanceDto => {
  const chargeInstanceCode = trimString(values.chargeInstanceCode);
  const productCode = trimString(values.productCode);
  const userAccountCode = trimString(values.userAccountCode);
  const customerAccountCode = trimString(values.customerAccountCode);
  const billingAccountCode = trimString(values.billingAccountCode);
  const subscriptionCode = trimString(values.subscriptionCode);

  return {
    ...(typeof values.id === 'number' ? { id: values.id } : {}),
    code: values.code.trim(),
    counterTemplateCode: values.counterTemplateCode.trim(),
    ...(chargeInstanceCode ? { chargeInstanceCode } : {}),
    ...(productCode ? { productCode } : {}),
    ...(userAccountCode ? { userAccountCode } : {}),
    ...(customerAccountCode ? { customerAccountCode } : {}),
    ...(billingAccountCode ? { billingAccountCode } : {}),
    ...(subscriptionCode ? { subscriptionCode } : {}),
    counterPeriods: values.counterPeriods.map(mapCounterPeriodFormToDto),
  } satisfies CounterInstanceDto;
};

const resolveActionStatus = (value: unknown) => {
  if (!value || typeof value !== 'object') {
    return undefined;
  }

  if ('status' in value && typeof (value as { status?: string }).status === 'string') {
    return value as { status: string; message?: string };
  }

  if ('actionStatus' in value) {
    const nested = (value as { actionStatus?: { status?: string; message?: string } | null }).actionStatus;
    if (nested) {
      return nested;
    }
  }

  return undefined;
};

const ensureActionStatusSuccess = (result: { data?: unknown; error?: unknown }, message: string) => {
  if (result.error) {
    if (result.error instanceof Error) {
      throw result.error;
    }

    if (typeof result.error === 'object' && result.error !== null) {
      const extracted =
        // @ts-expect-error – best effort extraction
        result.error?.message ||
        // @ts-expect-error – nested message
        result.error?.actionStatus?.message;
      if (typeof extracted === 'string' && extracted.length > 0) {
        throw new Error(extracted);
      }
    }

    throw new Error(message);
  }

  if (result.data) {
    const status = resolveActionStatus(result.data);
    assertActionSuccess(status as { status?: string; message?: string } | undefined, message);
  }
};

export const __internals = {
  buildListRequest,
  buildDetailRequest,
  collectDtos,
  extractTotalRecords,
  mapDtoToListItem,
  mapDtoToDetail,
  mapCounterInstanceFormToDto,
  mapCounterPeriodFormToDto,
  normalizeCode,
  trimString,
  createEmptyCounterPeriod,
};

export const useCounterInstances = (params: CounterInstanceListParams) =>
  useQuery<CounterInstanceListResult>({
    queryKey: queryKeys.counterInstances.list({
      page: params.page,
      pageSize: params.pageSize,
      search: trimString(params.search ?? undefined) ?? null,
    }),
    keepPreviousData: true,
    queryFn: async () => {
      const apiClient = getApiClient();
      const body = buildListRequest(params);
      const result = await apiClient.POST(
        '/api/rest/v2/generic/all/{entityName}' as never,
        {
          params: { path: { entityName: ENTITY_NAME } },
          body,
        } as never,
      );

      const payload = result.data as CounterInstanceListResponse | null;
      const actionStatus = resolveActionStatus(payload);
      assertActionSuccess(actionStatus as { status?: string; message?: string } | undefined, 'Unable to load counter instances');

      const dtos = collectDtos(payload);
      const offset = body.offset ?? 0;
      const items = dtos.map((dto, index) => mapDtoToListItem(dto, offset + index));
      const totalRecords = extractTotalRecords(payload, items.length);

      return {
        items,
        paging: { totalRecords },
      } satisfies CounterInstanceListResult;
    },
  });

export const useCounterInstance = (code: string | null | undefined) =>
  useQuery<CounterInstanceDetail | null>({
    queryKey: queryKeys.counterInstances.detail(normalizeCode(code)),
    enabled: Boolean(normalizeCode(code)),
    queryFn: async () => {
      const sanitizedCode = ensureCode(code, 'Counter instance code is required');
      const apiClient = getApiClient();
      const body = buildDetailRequest(sanitizedCode);
      const result = await apiClient.POST(
        '/api/rest/v2/generic/all/{entityName}' as never,
        {
          params: { path: { entityName: ENTITY_NAME } },
          body,
        } as never,
      );

      const payload = result.data as CounterInstanceListResponse | null;
      const actionStatus = resolveActionStatus(payload);
      assertActionSuccess(actionStatus as { status?: string; message?: string } | undefined, 'Unable to load counter instance');

      const dtos = collectDtos(payload);
      if (dtos.length === 0) {
        return null;
      }

      return mapDtoToDetail(dtos[0]);
    },
  });

export const useCounterInstanceMutations = () => {
  const queryClient = useQueryClient();

  const invalidateList = () => {
    queryClient.invalidateQueries({ queryKey: queryKeys.counterInstances.root });
  };

  const invalidateDetail = (code: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.counterInstances.detail(code) });
  };

  const create = useMutation({
    mutationFn: async (values: CounterInstanceFormValues) => {
      const parsed = counterInstanceFormSchema.parse(values);
      const dto = mapCounterInstanceFormToDto(parsed);
      const apiClient = getApiClient();
      const result = await apiClient.POST(
        '/api/rest/v2/accountsManagement/counterInstance' as never,
        { body: dto } as never,
      );
      ensureActionStatusSuccess(result, 'Unable to create counter instance');
      return dto;
    },
    onSuccess: (_data, variables) => {
      invalidateList();
      const code = normalizeCode(variables.code);
      if (code) {
        invalidateDetail(code);
      }
    },
  });

  const update = useMutation({
    mutationFn: async (values: CounterInstanceFormValues) => {
      const parsed = counterInstanceFormSchema.parse(values);
      const dto = mapCounterInstanceFormToDto(parsed);
      if (typeof dto.id !== 'number') {
        throw new Error('A valid counter instance identifier is required');
      }
      const apiClient = getApiClient();
      const result = await apiClient.PUT(
        '/api/rest/v2/accountsManagement/counterInstance/{id}' as never,
        {
          params: { path: { id: dto.id } },
          body: dto,
        } as never,
      );
      ensureActionStatusSuccess(result, 'Unable to update counter instance');
      return dto;
    },
    onSuccess: (_data, variables) => {
      invalidateList();
      const code = normalizeCode(variables.code);
      if (code) {
        invalidateDetail(code);
      }
    },
  });

  return { create, update };
};
