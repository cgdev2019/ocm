import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  GetSellerResponse,
  SellerDto,
  SellerFormValues,
  SellerListItem,
  SellerResponseDto,
  SellerCodesResponseDto,
} from '@/features/sellers/types';

export const DEFAULT_SELLERS_PAGE_SIZE = 20;

const mapDtoToForm = (dto: SellerDto): SellerFormValues => ({
  code: dto.code,
  description: dto.description ?? undefined,
  currencyCode: dto.currencyCode ?? undefined,
  countryCode: dto.countryCode ?? undefined,
  languageCode: dto.languageCode ?? undefined,
  parentSeller: dto.parentSeller ?? undefined,
  vatNo: dto.vatNo ?? undefined,
  registrationNo: dto.registrationNo ?? undefined,
  legalType: dto.legalType ?? undefined,
  legalText: dto.legalText ?? undefined,
  email: dto.contactInformation?.email ?? undefined,
  phone: dto.contactInformation?.phone ?? undefined,
  address1: dto.address?.address1 ?? undefined,
  address2: dto.address?.address2 ?? undefined,
  city: dto.address?.city ?? undefined,
  zipCode: dto.address?.zipCode ?? undefined,
  state: dto.address?.state ?? undefined,
  addressCountry: dto.address?.country ?? undefined,
});

const mapFormToDto = (values: SellerFormValues): SellerDto => ({
  code: values.code,
  description: values.description,
  currencyCode: values.currencyCode,
  countryCode: values.countryCode,
  languageCode: values.languageCode,
  parentSeller: values.parentSeller,
  vatNo: values.vatNo,
  registrationNo: values.registrationNo,
  legalType: values.legalType,
  legalText: values.legalText,
  contactInformation:
    values.email || values.phone
      ? {
          email: values.email,
          phone: values.phone,
        }
      : undefined,
  address:
    values.address1 || values.address2 || values.city || values.zipCode || values.state || values.addressCountry
      ? {
          address1: values.address1,
          address2: values.address2,
          city: values.city,
          zipCode: values.zipCode,
          state: values.state,
          country: values.addressCountry,
        }
      : undefined,
});

const adaptList = (items: SellerDto[] | undefined): SellerListItem[] =>
  (items ?? []).map((item) => ({
    code: item.code,
    description: item.description ?? undefined,
    countryCode: item.countryCode ?? undefined,
    currencyCode: item.currencyCode ?? undefined,
  }));

export const useSellers = () =>
  useQuery({
    queryKey: queryKeys.sellers.list(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/seller/list');
      const payload = unwrapResponse<SellerResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load sellers',
      );
      assertActionSuccess(payload.actionStatus, 'Seller list request failed');
      return adaptList(payload.sellers?.seller);
    },
  });

export const useSeller = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.sellers.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      if (!code) {
        return null;
      }
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/seller', {
        params: { query: { sellerCode: code } },
      });
      const payload = unwrapResponse<GetSellerResponse>(
        { data: result.data, error: result.error },
        'Unable to load seller',
      );
      assertActionSuccess(payload.actionStatus, 'Seller request failed');
      return payload.seller ? mapDtoToForm(payload.seller) : null;
    },
  });

export const useSellerCodes = () =>
  useQuery({
    queryKey: queryKeys.sellers.codes(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/seller/listSellerCodes');
      const payload = unwrapResponse<SellerCodesResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load seller codes',
      );
      assertActionSuccess(payload.actionStatus, 'Seller codes request failed');
      return payload.sellerCodes ?? [];
    },
  });

export const useSellerMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (code?: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.sellers.list() });
    queryClient.invalidateQueries({ queryKey: queryKeys.sellers.codes() });
    if (code) {
      queryClient.invalidateQueries({ queryKey: queryKeys.sellers.detail(code) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: SellerFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/seller', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Seller creation failed',
      );
      assertActionSuccess(payload, 'Seller creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const update = useMutation({
    mutationFn: async (values: SellerFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/seller', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Seller update failed',
      );
      assertActionSuccess(payload, 'Seller update failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const upsert = useMutation({
    mutationFn: async (values: SellerFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/seller/createOrUpdate', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Seller upsert failed',
      );
      assertActionSuccess(payload, 'Seller upsert failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/seller/{sellerCode}', {
        params: { path: { sellerCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Seller deletion failed',
      );
      assertActionSuccess(payload, 'Seller deletion failed');
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
