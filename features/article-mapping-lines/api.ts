import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type {
  ArticleMappingLineDetail,
  ArticleMappingLineDto,
  ArticleMappingLineFormValues,
  ArticleMappingLineResponseDto,
  AttributeMappingDto,
  AttributeMappingFormValue,
} from '@/features/article-mapping-lines/types';

const LOAD_ERROR_MESSAGE = 'Unable to load article mapping line';
const CREATE_ERROR_MESSAGE = 'Unable to create article mapping line';
const UPDATE_ERROR_MESSAGE = 'Unable to update article mapping line';
const DELETE_ERROR_MESSAGE = 'Unable to delete article mapping line';

const trimString = (value: string | null | undefined): string | undefined => {
  if (typeof value !== 'string') {
    return undefined;
  }
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
};

const normalizeCode = (code: string | null | undefined): string => trimString(code) ?? '';

const normalizeId = (value: number | string | null | undefined): number | null => {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!trimmed) {
      return null;
    }
    const parsed = Number(trimmed);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
};

const getResourceCode = (resource: { code?: string | null } | null | undefined): string | undefined =>
  trimString(resource?.code ?? undefined);

const toResource = <T extends { code?: string | null }>(code: string | null | undefined): T | undefined => {
  const normalized = trimString(code ?? undefined);
  if (!normalized) {
    return undefined;
  }
  return { code: normalized } as T;
};

const mapAttributeDtoToForm = (dto: AttributeMappingDto | null | undefined): AttributeMappingFormValue => ({
  id: dto?.id ?? undefined,
  attributeCode: getResourceCode(dto?.attribute ?? undefined),
  operator: dto?.operator ?? 'EQUAL',
  attributeValue: trimString(dto?.attributeValue ?? undefined),
});

const mapAttributeFormToDto = (value: AttributeMappingFormValue): AttributeMappingDto => ({
  id: value.id,
  operator: value.operator ?? 'EQUAL',
  attributeValue: trimString(value.attributeValue ?? undefined),
  attribute: toResource<AttributeMappingDto['attribute']>(value.attributeCode ?? undefined),
});

const sanitizeAttributes = (values: AttributeMappingFormValue[]): AttributeMappingDto[] | undefined => {
  if (!values || values.length === 0) {
    return undefined;
  }
  const mapped = values
    .map((entry) => mapAttributeFormToDto(entry))
    .filter((entry) => entry.attribute || entry.attributeValue);
  return mapped.length > 0 ? mapped : undefined;
};

const mapDtoToDetail = (dto: ArticleMappingLineDto): ArticleMappingLineDetail => ({
  id: dto.id ?? undefined,
  code: dto.code ?? '',
  description: trimString(dto.description ?? undefined),
  articleMappingCode: getResourceCode(dto.articleMapping ?? undefined),
  accountingArticleCode: getResourceCode(dto.accountingArticle ?? undefined),
  attributeOperator: dto.attributeOperator ?? 'AND',
  attributes: (dto.attributesMapping ?? []).map((item) => mapAttributeDtoToForm(item)),
  offerTemplateCode: getResourceCode(dto.offerTemplate ?? undefined),
  productCode: getResourceCode(dto.product ?? undefined),
  chargeTemplateCode: getResourceCode(dto.chargeTemplate ?? undefined),
  parameter1: trimString(dto.parameter1 ?? undefined),
  parameter2: trimString(dto.parameter2 ?? undefined),
  parameter3: trimString(dto.parameter3 ?? undefined),
  mappingKeyEL: trimString(dto.mappingKeyEL ?? undefined),
});

const mapFormToDto = (values: ArticleMappingLineFormValues): ArticleMappingLineDto => {
  const attributesMapping = sanitizeAttributes(values.attributes);

  return {
    id: values.id,
    code: values.code.trim(),
    description: trimString(values.description ?? undefined),
    articleMapping: toResource<ArticleMappingLineDto['articleMapping']>(values.articleMappingCode ?? undefined),
    accountingArticle: toResource<ArticleMappingLineDto['accountingArticle']>(values.accountingArticleCode ?? undefined),
    attributeOperator: values.attributeOperator ?? 'AND',
    ...(attributesMapping ? { attributesMapping } : {}),
    offerTemplate: toResource<ArticleMappingLineDto['offerTemplate']>(values.offerTemplateCode ?? undefined),
    product: toResource<ArticleMappingLineDto['product']>(values.productCode ?? undefined),
    chargeTemplate: toResource<ArticleMappingLineDto['chargeTemplate']>(values.chargeTemplateCode ?? undefined),
    parameter1: trimString(values.parameter1 ?? undefined),
    parameter2: trimString(values.parameter2 ?? undefined),
    parameter3: trimString(values.parameter3 ?? undefined),
    mappingKeyEL: trimString(values.mappingKeyEL ?? undefined),
  };
};

const extractArticleMappingLine = (payload: unknown): ArticleMappingLineDto => {
  const queue: unknown[] = [payload];
  const visited = new Set<unknown>();

  while (queue.length > 0) {
    const current = queue.shift();
    if (!current || typeof current !== 'object') {
      continue;
    }
    if (visited.has(current)) {
      continue;
    }
    visited.add(current);

    const container = current as ArticleMappingLineResponseDto;

    if ('actionStatus' in container) {
      assertActionSuccess(
        container.actionStatus ?? undefined,
        'Article mapping line endpoint returned an error',
      );
    }

    if ('code' in container && typeof container.code === 'string') {
      return container as ArticleMappingLineDto;
    }

    const nestedCandidates: unknown[] = [
      container.articleMappingLine,
      container.articleMappingLineDto,
      container.result,
      container.data,
      container.articleMappingLines,
    ];

    for (const candidate of nestedCandidates) {
      if (!candidate) {
        continue;
      }
      if (Array.isArray(candidate)) {
        queue.push(...candidate);
      } else {
        queue.push(candidate);
      }
    }
  }

  throw new Error(LOAD_ERROR_MESSAGE);
};

export const useArticleMappingLine = (id: number | string | null | undefined) => {
  const normalizedId = normalizeId(id);
  const queryKey =
    normalizedId !== null
      ? queryKeys.articleMappingLines.detail(normalizedId)
      : queryKeys.articleMappingLines.detail('unknown');

  return useQuery<ArticleMappingLineDetail>({
    queryKey,
    enabled: normalizedId !== null,
    queryFn: async () => {
      if (normalizedId === null) {
        throw new Error('Article mapping line id is required');
      }
      const apiClient = getApiClient();
      const result = await apiClient.GET(
        '/api/rest/v2/articleMappingLines/{id}' as never,
        { params: { path: { id: normalizedId } } } as never,
      );
      const payload = unwrapResponse<unknown>({ data: result.data as unknown, error: result.error }, LOAD_ERROR_MESSAGE);
      const dto = extractArticleMappingLine(payload);
      return mapDtoToDetail(dto);
    },
    staleTime: 60_000,
  });
};

export const useArticleMappingLineByCode = (code: string | null | undefined) => {
  const normalizedCode = normalizeCode(code);
  const queryKey =
    normalizedCode.length > 0
      ? queryKeys.articleMappingLines.detailByCode(normalizedCode)
      : queryKeys.articleMappingLines.detailByCode('unknown');

  return useQuery<ArticleMappingLineDetail>({
    queryKey,
    enabled: normalizedCode.length > 0,
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET(
        '/api/rest/v2/articleMappingLines/find/{code}' as never,
        { params: { path: { code: normalizedCode } } } as never,
      );
      const payload = unwrapResponse<unknown>({ data: result.data as unknown, error: result.error }, LOAD_ERROR_MESSAGE);
      const dto = extractArticleMappingLine(payload);
      return mapDtoToDetail(dto);
    },
    staleTime: 60_000,
  });
};

type DeleteParams = { id: number | string; code?: string | null };

export const useArticleMappingLineMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = (id?: number | null, code?: string | null | undefined) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.articleMappingLines.root });
    if (id !== null && id !== undefined) {
      queryClient.invalidateQueries({ queryKey: queryKeys.articleMappingLines.detail(id) });
    }
    const normalizedCode = normalizeCode(code ?? null);
    if (normalizedCode) {
      queryClient.invalidateQueries({ queryKey: queryKeys.articleMappingLines.detailByCode(normalizedCode) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: ArticleMappingLineFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST(
        '/api/rest/v2/articleMappingLines' as never,
        { body: dto } as never,
      );
      const payload = unwrapResponse<unknown>({ data: result.data as unknown, error: result.error }, CREATE_ERROR_MESSAGE);
      return extractArticleMappingLine(payload);
    },
    onSuccess: (data) => {
      invalidate(normalizeId(data?.id ?? null), data?.code ?? null);
    },
  });

  const update = useMutation({
    mutationFn: async (values: ArticleMappingLineFormValues) => {
      const normalizedId = normalizeId(values.id ?? null);
      if (normalizedId === null) {
        throw new Error('Article mapping line id is required');
      }
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT(
        '/api/rest/v2/articleMappingLines/{id}' as never,
        { params: { path: { id: normalizedId } }, body: dto } as never,
      );
      const payload = unwrapResponse<unknown>({ data: result.data as unknown, error: result.error }, UPDATE_ERROR_MESSAGE);
      return extractArticleMappingLine(payload);
    },
    onSuccess: (data, variables) => {
      const resolvedId = normalizeId(data?.id ?? variables.id ?? null);
      const resolvedCode = data?.code ?? variables.code ?? null;
      invalidate(resolvedId, resolvedCode);
    },
  });

  const remove = useMutation({
    mutationFn: async ({ id }: DeleteParams) => {
      const normalizedId = normalizeId(id);
      if (normalizedId === null) {
        throw new Error('Article mapping line id is required');
      }
      const apiClient = getApiClient();
      const result = await apiClient.DELETE(
        '/api/rest/v2/articleMappingLines/{id}' as never,
        { params: { path: { id: normalizedId } } } as never,
      );
      const payload = unwrapResponse<unknown>({ data: result.data as unknown, error: result.error }, DELETE_ERROR_MESSAGE);
      return extractArticleMappingLine(payload);
    },
    onSuccess: (data, variables) => {
      const resolvedId = normalizeId(data?.id ?? variables.id ?? null);
      const resolvedCode = data?.code ?? variables.code ?? null;
      invalidate(resolvedId, resolvedCode);
    },
  });

  return { create, update, remove };
};

export const __internals = {
  normalizeCode,
  normalizeId,
  mapDtoToDetail,
  mapFormToDto,
  extractArticleMappingLine,
};
