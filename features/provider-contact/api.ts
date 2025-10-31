import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  ProviderContactDto,
  ProviderContactFormValues,
  ProviderContactListItem,
  ProviderContactResponseDto,
  ProviderContactsResponseDto,
} from '@/features/provider-contact/types';

export const DEFAULT_PROVIDER_CONTACTS_PAGE_SIZE = 20;

const adaptList = (payload: ProviderContactsResponseDto | null | undefined): ProviderContactListItem[] =>
  payload?.providerContacts?.map((contact) => ({
    code: contact?.code ?? '',
    description: contact?.description ?? undefined,
    firstName: contact?.firstName ?? undefined,
    lastName: contact?.lastName ?? undefined,
    email: contact?.email ?? undefined,
    phone: contact?.phone ?? undefined,
  })) ?? [];

const mapDtoToForm = (dto: ProviderContactDto): ProviderContactFormValues => ({
  code: dto.code ?? '',
  description: dto.description ?? undefined,
  firstName: dto.firstName ?? undefined,
  lastName: dto.lastName ?? undefined,
  email: dto.email ?? undefined,
  phone: dto.phone ?? undefined,
  mobile: dto.mobile ?? undefined,
  fax: dto.fax ?? undefined,
  genericMail: dto.genericMail ?? undefined,
  address1: dto.addressDto?.address1 ?? undefined,
  address2: dto.addressDto?.address2 ?? undefined,
  address3: dto.addressDto?.address3 ?? undefined,
  address4: dto.addressDto?.address4 ?? undefined,
  address5: dto.addressDto?.address5 ?? undefined,
  zipCode: dto.addressDto?.zipCode ?? undefined,
  city: dto.addressDto?.city ?? undefined,
  country: dto.addressDto?.country ?? undefined,
  state: dto.addressDto?.state ?? undefined,
});

const mapFormToDto = (values: ProviderContactFormValues): ProviderContactDto => ({
  code: values.code,
  description: values.description,
  firstName: values.firstName,
  lastName: values.lastName,
  email: values.email,
  phone: values.phone,
  mobile: values.mobile,
  fax: values.fax,
  genericMail: values.genericMail,
  addressDto: {
    address1: values.address1,
    address2: values.address2,
    address3: values.address3,
    address4: values.address4,
    address5: values.address5,
    zipCode: values.zipCode,
    city: values.city,
    country: values.country,
    state: values.state,
  },
});

export const useProviderContacts = () =>
  useQuery({
    queryKey: queryKeys.providerContacts.list(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/account/providerContact/list');
      const payload = unwrapResponse<ProviderContactsResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load provider contacts',
      );
      assertActionSuccess(payload?.actionStatus, 'Provider contacts request failed');
      return adaptList(payload);
    },
  });

export const useProviderContact = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.providerContacts.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      if (!code) {
        return null;
      }
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/account/providerContact', {
        params: { query: { providerContactCode: code } },
      });
      const payload = unwrapResponse<ProviderContactResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load provider contact',
      );
      assertActionSuccess(payload?.actionStatus, 'Provider contact request failed');
      return payload?.providerContact ? mapDtoToForm(payload.providerContact) : null;
    },
  });

export const useProviderContactVersion = () =>
  useQuery({
    queryKey: queryKeys.providerContacts.version(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/account/providerContact/version');
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to load provider contact version',
      );
      assertActionSuccess(payload, 'Provider contact version request failed');
      return payload.message ?? '';
    },
  });

export const useProviderContactMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (code?: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.providerContacts.list() });
    if (code) {
      queryClient.invalidateQueries({ queryKey: queryKeys.providerContacts.detail(code) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: ProviderContactFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/account/providerContact', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Provider contact creation failed',
      );
      assertActionSuccess(payload, 'Provider contact creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const update = useMutation({
    mutationFn: async (values: ProviderContactFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/account/providerContact', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Provider contact update failed',
      );
      assertActionSuccess(payload, 'Provider contact update failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const upsert = useMutation({
    mutationFn: async (values: ProviderContactFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/account/providerContact/createOrUpdate', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Provider contact upsert failed',
      );
      assertActionSuccess(payload, 'Provider contact upsert failed');
      return payload;
    },
    onSuccess: (_data, variables) => invalidate(variables.code),
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/account/providerContact/{code}', {
        params: { path: { code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Provider contact deletion failed',
      );
      assertActionSuccess(payload, 'Provider contact deletion failed');
      return payload;
    },
    onSuccess: (_data, code) => invalidate(code),
  });

  return useMemo(
    () => ({ create, update, upsert, remove }),
    [create, remove, update, upsert],
  );
};
