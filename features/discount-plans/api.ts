import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import { discountPlanFormSchema } from '@/features/discount-plans/schema';
import type {
  ActionStatus,
  DiscountPlanDto,
  DiscountPlanFormValues,
  DiscountPlanListItem,
  DiscountPlanListParams,
  DiscountPlansDto,
  GetDiscountPlanResponseDto,
  GetDiscountPlansResponseDto,
} from '@/features/discount-plans/types';

const adaptSingle = (
  payload: GetDiscountPlanResponseDto | null | undefined,
): DiscountPlanListItem[] => {
  const dto = payload?.discountPlanDto;
  if (!dto) {
    return [];
  }
  return [
    {
      code: dto.code ?? '',
      description: dto.description ?? undefined,
      discountPlanType: dto.discountPlanType ?? undefined,
      status: dto.status ?? undefined,
      startDate: dto.startDate ?? undefined,
      endDate: dto.endDate ?? undefined,
    },
  ];
};

const adaptMany = (
  payload: GetDiscountPlansResponseDto | null | undefined,
): DiscountPlanListItem[] => {
  const items = (payload?.discountPlan as DiscountPlansDto | undefined)?.discountPlan ?? [];
  return items.map((item) => ({
    code: item.code ?? '',
    description: item.description ?? undefined,
    discountPlanType: item.discountPlanType ?? undefined,
    status: item.status ?? undefined,
    startDate: item.startDate ?? undefined,
    endDate: item.endDate ?? undefined,
  }));
};

const mapDtoToForm = (dto: DiscountPlanDto): DiscountPlanFormValues => ({
  code: dto.code,
  description: dto.description ?? '',
  discountPlanType: dto.discountPlanType ?? 'OFFER',
  status: dto.status ?? 'DRAFT',
  disabled: dto.disabled ?? false,
  startDate: dto.startDate ?? '',
  endDate: dto.endDate ?? '',
  defaultDuration: dto.defaultDuration != null ? String(dto.defaultDuration) : '',
  durationUnit: dto.durationUnit ?? undefined,
  expressionEl: dto.expressionEl ?? '',
  applicationFilterEL: dto.applicationFilterEL ?? '',
  initialQuantity: dto.initialQuantity != null ? String(dto.initialQuantity) : '',
  usedQuantity: dto.usedQuantity != null ? String(dto.usedQuantity) : '',
  applicationLimit: dto.applicationLimit != null ? String(dto.applicationLimit) : '',
  sequence: dto.sequence != null ? String(dto.sequence) : '',
  applicableOnDiscountedPrice: dto.applicableOnDiscountedPrice ?? false,
  applicableOnContractPrice: dto.applicableOnContractPrice ?? false,
  applicableOnOverriddenPrice: dto.applicableOnOverriddenPrice ?? false,
});

const mapFormToDto = (values: DiscountPlanFormValues): DiscountPlanDto => {
  const defaultDurationValue = values.defaultDuration ? Number(values.defaultDuration) : undefined;
  const initialQuantityValue = values.initialQuantity ? Number(values.initialQuantity) : undefined;
  const usedQuantityValue = values.usedQuantity ? Number(values.usedQuantity) : undefined;
  const applicationLimitValue = values.applicationLimit ? Number(values.applicationLimit) : undefined;
  const sequenceValue = values.sequence ? Number(values.sequence) : undefined;
  return {
    code: values.code,
    description: values.description,
    discountPlanType: values.discountPlanType,
    status: values.status,
    disabled: values.disabled,
    startDate: values.startDate || undefined,
    endDate: values.endDate || undefined,
    defaultDuration:
      defaultDurationValue == null || Number.isNaN(defaultDurationValue) ? undefined : defaultDurationValue,
    durationUnit: values.durationUnit,
    expressionEl: values.expressionEl,
    applicationFilterEL: values.applicationFilterEL,
    initialQuantity:
      initialQuantityValue == null || Number.isNaN(initialQuantityValue) ? undefined : initialQuantityValue,
    usedQuantity: usedQuantityValue == null || Number.isNaN(usedQuantityValue) ? undefined : usedQuantityValue,
    applicationLimit:
      applicationLimitValue == null || Number.isNaN(applicationLimitValue) ? undefined : applicationLimitValue,
    sequence: sequenceValue == null || Number.isNaN(sequenceValue) ? undefined : sequenceValue,
    applicableOnDiscountedPrice: values.applicableOnDiscountedPrice,
    applicableOnContractPrice: values.applicableOnContractPrice,
    applicableOnOverriddenPrice: values.applicableOnOverriddenPrice,
    discountPlanItems: undefined,
    incompatibleDiscountPlans: undefined,
    applicableEntities: undefined,
    customFields: undefined,
  } as DiscountPlanDto;
};

export const useDiscountPlans = (params?: DiscountPlanListParams) =>
  useQuery({
    queryKey: queryKeys.discountPlans.list(params ?? {}),
    queryFn: async () => {
      if (!params?.query) {
        return [] as DiscountPlanListItem[];
      }
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/catalog/discountPlan', {
        params: { query: { discountPlanCode: params.query } },
      });
      const payload = unwrapResponse<GetDiscountPlanResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load discount plan',
      );
      assertActionSuccess(payload?.actionStatus, 'Discount plan request failed');
      return adaptSingle(payload);
    },
  });

export const useDiscountPlanList = () =>
  useQuery({
    queryKey: queryKeys.discountPlans.all(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/catalog/discountPlan/list');
      const payload = unwrapResponse<GetDiscountPlansResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load discount plans',
      );
      assertActionSuccess(payload?.actionStatus, 'Discount plans request failed');
      return adaptMany(payload);
    },
  });

export const useDiscountPlan = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.discountPlans.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      if (!code) {
        return null as DiscountPlanFormValues | null;
      }
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/catalog/discountPlan', {
        params: { query: { discountPlanCode: code } },
      });
      const payload = unwrapResponse<GetDiscountPlanResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load discount plan detail',
      );
      assertActionSuccess(payload?.actionStatus, 'Discount plan detail failed');
      const dto = payload?.discountPlanDto;
      if (!dto) {
        return null;
      }
      const parsed = discountPlanFormSchema.safeParse(mapDtoToForm(dto));
      return parsed.success ? parsed.data : mapDtoToForm(dto);
    },
  });

export const useDiscountPlanMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (code?: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.discountPlans.list() });
    queryClient.invalidateQueries({ queryKey: queryKeys.discountPlans.all() });
    queryClient.invalidateQueries({ queryKey: queryKeys.discountPlans.version() });
    if (code) {
      queryClient.invalidateQueries({ queryKey: queryKeys.discountPlans.detail(code) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: DiscountPlanFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/catalog/discountPlan', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to create discount plan',
      );
      assertActionSuccess(payload, 'Discount plan creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const update = useMutation({
    mutationFn: async (values: DiscountPlanFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/catalog/discountPlan', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to update discount plan',
      );
      assertActionSuccess(payload, 'Discount plan update failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const createOrUpdate = useMutation({
    mutationFn: async (values: DiscountPlanFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/catalog/discountPlan/createOrUpdate', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to create or update discount plan',
      );
      assertActionSuccess(payload, 'Discount plan createOrUpdate failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const enable = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/catalog/discountPlan/{code}/enable', {
        params: { path: { code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to enable discount plan',
      );
      assertActionSuccess(payload, 'Discount plan enable failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  const disable = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST('/api/rest/catalog/discountPlan/{code}/disable', {
        params: { path: { code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to disable discount plan',
      );
      assertActionSuccess(payload, 'Discount plan disable failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/catalog/discountPlan', {
        params: { query: { discountPlanCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to delete discount plan',
      );
      assertActionSuccess(payload, 'Discount plan deletion failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  return useMemo(
    () => ({ create, update, createOrUpdate, enable, disable, remove }),
    [create, createOrUpdate, disable, enable, remove, update],
  );
};

export const useDiscountPlanVersion = () =>
  useQuery({
    queryKey: queryKeys.discountPlans.version(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/catalog/discountPlan/version');
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to load discount plan version',
      );
      assertActionSuccess(payload, 'Discount plan version request failed');
      return payload.message ?? '';
    },
  });
