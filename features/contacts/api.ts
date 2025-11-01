import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse, type ActionStatus } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import { contactFormSchema } from '@/features/contacts/schema';
import type {
  ContactDetail,
  ContactDto,
  ContactFormValues,
  ContactListParams,
  ContactListResponse,
  ContactListResult,
  GenericPagingRequest,
} from '@/features/contacts/types';

export const DEFAULT_CONTACTS_PAGE_SIZE = 50;

const ENTITY_NAME = 'Contact';
const GENERIC_FIELDS = ['code', 'description', 'company', 'jobTitle'] as const;
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

const buildListRequest = (params: ContactListParams): GenericPagingRequest => {
  const page = Number.isFinite(params.page) && params.page > 0 ? Math.floor(params.page) : 0;
  const pageSize = Number.isFinite(params.pageSize) && params.pageSize > 0
    ? Math.floor(params.pageSize)
    : DEFAULT_CONTACTS_PAGE_SIZE;

  const filters: Record<string, unknown> = {};
  const search = trimString(params.search ?? undefined);
  if (search) {
    const normalized = search.toLowerCase();
    filters.code = normalized;
    filters.description = normalized;
    filters.company = normalized;
  }

  const request: GenericPagingRequest = {
    limit: pageSize,
    offset: page * pageSize,
    genericFields: [...GENERIC_FIELDS],
    sortBy: DEFAULT_SORT_FIELD,
    sortOrder: DEFAULT_SORT_ORDER,
  };

  if (Object.keys(filters).length > 0) {
    request.filters = filters;
  }

  return request;
};

const buildDetailRequest = (code: string): GenericPagingRequest => ({
  limit: 1,
  offset: 0,
  genericFields: [...GENERIC_FIELDS],
  filters: { code },
});

const collectDtos = (payload: ContactListResponse | null | undefined): ContactDto[] => {
  if (!payload) {
    return [];
  }

  const candidates = [payload.data, payload.results, payload.list];
  for (const candidate of candidates) {
    if (Array.isArray(candidate) && candidate.length > 0) {
      return candidate.filter((item): item is ContactDto => Boolean(item));
    }
  }

  const contacts = payload.contacts;
  if (Array.isArray(contacts) && contacts.length > 0) {
    return contacts.filter((item): item is ContactDto => Boolean(item));
  }

  if (contacts && typeof contacts === 'object') {
    const nested = (contacts as { contact?: ContactDto[] | null }).contact ?? null;
    if (Array.isArray(nested) && nested.length > 0) {
      return nested.filter((item): item is ContactDto => Boolean(item));
    }
  }

  return [];
};

const extractTotalRecords = (
  payload: ContactListResponse | null | undefined,
  fallback: number,
): number => {
  if (!payload) {
    return fallback;
  }

  if (typeof payload.totalNumberOfRecords === 'number' && payload.totalNumberOfRecords >= 0) {
    return payload.totalNumberOfRecords;
  }

  if (payload.paging?.totalNumberOfRecords && payload.paging.totalNumberOfRecords >= 0) {
    return payload.paging.totalNumberOfRecords;
  }

  const contacts = payload.contacts;
  if (contacts && typeof contacts === 'object' && !Array.isArray(contacts)) {
    const total = (contacts as { totalNumberOfRecords?: number | null }).totalNumberOfRecords;
    if (typeof total === 'number' && total >= 0) {
      return total;
    }
  }

  return fallback;
};

const mapDtoToListItem = (dto: ContactDto, fallbackIndex: number): ContactListResult['items'][number] => {
  const code = normalizeCode(dto.code);
  const description = trimString(dto.description ?? undefined);
  const company = trimString(dto.company ?? undefined);
  const jobTitle = trimString(dto.jobTitle ?? undefined);
  const email = trimString(dto.contactInformation?.email ?? undefined);
  const phone = trimString(dto.contactInformation?.phone ?? undefined);

  const resolvedCode = code || `__contact-${fallbackIndex}`;

  return {
    code: resolvedCode,
    ...(description ? { description } : {}),
    ...(company ? { company } : {}),
    ...(jobTitle ? { jobTitle } : {}),
    ...(email ? { email } : {}),
    ...(phone ? { phone } : {}),
  } satisfies ContactListResult['items'][number];
};

const mapDtoToDetail = (dto: ContactDto): ContactDetail => {
  const base: ContactFormValues = {
    code: normalizeCode(dto.code),
    description: trimString(dto.description ?? undefined),
    company: trimString(dto.company ?? undefined),
    jobTitle: trimString(dto.jobTitle ?? undefined),
    email: trimString(dto.contactInformation?.email ?? undefined),
    phone: trimString(dto.contactInformation?.phone ?? undefined),
    mobile: trimString(dto.contactInformation?.mobile ?? undefined),
    comment: trimString(dto.comment ?? undefined),
  };

  const parsed = contactFormSchema.safeParse(base);
  return parsed.success ? parsed.data : base;
};

const mapFormToDto = (values: ContactFormValues): ContactDto => {
  const code = values.code.trim();
  const description = trimString(values.description ?? undefined);
  const company = trimString(values.company ?? undefined);
  const jobTitle = trimString(values.jobTitle ?? undefined);
  const email = trimString(values.email ?? undefined);
  const phone = trimString(values.phone ?? undefined);
  const mobile = trimString(values.mobile ?? undefined);
  const comment = trimString(values.comment ?? undefined);

  const contactInformation = {
    ...(email ? { email } : {}),
    ...(phone ? { phone } : {}),
    ...(mobile ? { mobile } : {}),
  };

  const hasContactInformation = Object.keys(contactInformation).length > 0;

  return {
    code,
    ...(description ? { description } : {}),
    ...(company ? { company } : {}),
    ...(jobTitle ? { jobTitle } : {}),
    ...(hasContactInformation ? { contactInformation } : {}),
    ...(comment ? { comment } : {}),
  } satisfies ContactDto;
};

const resolveActionStatus = (value: unknown): ActionStatus | undefined => {
  if (!value || typeof value !== 'object') {
    return undefined;
  }

  if ('status' in value && typeof (value as ActionStatus).status === 'string') {
    return value as ActionStatus;
  }

  if ('actionStatus' in value) {
    const nested = (value as { actionStatus?: ActionStatus | null }).actionStatus ?? undefined;
    if (nested) {
      return nested;
    }
  }

  return undefined;
};

export const __internals = {
  buildListRequest,
  buildDetailRequest,
  collectDtos,
  extractTotalRecords,
  mapDtoToListItem,
  mapDtoToDetail,
  mapFormToDto,
  normalizeCode,
  trimString,
  resolveActionStatus,
};

export const useContacts = (params: ContactListParams) =>
  useQuery<ContactListResult>({
    queryKey: queryKeys.contacts.list({
      page: params.page,
      pageSize: params.pageSize,
      search: trimString(params.search ?? undefined) ?? null,
    }),
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

      const payload = unwrapResponse<ContactListResponse | null>(
        { data: (result.data ?? null) as ContactListResponse | null, error: result.error },
        'Unable to load contacts',
      );

      const actionStatus = resolveActionStatus(payload);
      assertActionSuccess(actionStatus, 'Unable to load contacts');

      const dtos = collectDtos(payload);
      const offset = body.offset ?? 0;
      const items = dtos.map((dto, index) => mapDtoToListItem(dto, offset + index));
      const totalRecords = extractTotalRecords(payload, items.length);

      return {
        items,
        paging: { totalRecords },
      } satisfies ContactListResult;
    },
    keepPreviousData: true,
  });

export const useContact = (code: string | null | undefined) =>
  useQuery<ContactDetail | null>({
    queryKey: queryKeys.contacts.detail(normalizeCode(code)),
    enabled: Boolean(normalizeCode(code)),
    queryFn: async () => {
      const sanitizedCode = ensureCode(code, 'Contact code is required');
      const apiClient = getApiClient();
      const body = buildDetailRequest(sanitizedCode);
      const result = await apiClient.POST(
        '/api/rest/v2/generic/all/{entityName}' as never,
        {
          params: { path: { entityName: ENTITY_NAME } },
          body,
        } as never,
      );

      const payload = unwrapResponse<ContactListResponse | null>(
        { data: (result.data ?? null) as ContactListResponse | null, error: result.error },
        'Unable to load contact',
      );

      const actionStatus = resolveActionStatus(payload);
      assertActionSuccess(actionStatus, 'Unable to load contact');

      const dto = collectDtos(payload)[0];
      return dto ? mapDtoToDetail(dto) : null;
    },
    staleTime: 60_000,
  });

export const useContactMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (code?: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.contacts.root });
    if (code) {
      queryClient.invalidateQueries({ queryKey: queryKeys.contacts.detail(code) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: ContactFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/v2/contact' as never, { body: dto } as never);

      const payload = unwrapResponse<unknown>(
        { data: result.data as unknown, error: result.error },
        'Unable to create contact',
      );

      const status = resolveActionStatus(payload);
      assertActionSuccess(status, 'Unable to create contact');
      invalidate(values.code.trim());
      return payload;
    },
  });

  const update = useMutation({
    mutationFn: async (values: ContactFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/v2/contact' as never, { body: dto } as never);

      const payload = unwrapResponse<unknown>(
        { data: result.data as unknown, error: result.error },
        'Unable to update contact',
      );

      const status = resolveActionStatus(payload);
      assertActionSuccess(status, 'Unable to update contact');
      invalidate(values.code.trim());
      return payload;
    },
  });

  const remove = useMutation({
    mutationFn: async (rawCode: string) => {
      const code = ensureCode(rawCode, 'Contact code is required for deletion');
      const apiClient = getApiClient();
      const result = await apiClient.DELETE(
        '/api/rest/v2/contact/{code}' as never,
        { params: { path: { code } } } as never,
      );

      const payload = unwrapResponse<unknown>(
        { data: result.data as unknown, error: result.error },
        'Unable to delete contact',
      );

      const status = resolveActionStatus(payload);
      assertActionSuccess(status, 'Unable to delete contact');
      invalidate(code);
      return payload;
    },
  });

  return useMemo(() => ({ create, update, remove }), [create, remove, update]);
};
