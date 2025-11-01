import { useQuery } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type {
  ArticleMappingDetail,
  ArticleMappingDto,
  ArticleMappingResponseDto,
} from '@/features/article-mappings/types';

const ERROR_MESSAGE = 'Unable to load article mapping';

const normalizeCode = (code: string | null | undefined): string => code?.trim() ?? '';

const extractArticleMapping = (payload: unknown): ArticleMappingDto => {
  if (!payload || typeof payload !== 'object') {
    throw new Error(ERROR_MESSAGE);
  }

  const container = payload as ArticleMappingResponseDto;

  if ('actionStatus' in container) {
    assertActionSuccess(container.actionStatus, 'Article mapping endpoint returned an error');
  }

  if (container.articleMapping) {
    return extractArticleMapping(container.articleMapping);
  }

  if (container.data) {
    return extractArticleMapping(container.data);
  }

  if (container.result) {
    return extractArticleMapping(container.result);
  }

  if ('code' in container && typeof container.code === 'string') {
    return container as ArticleMappingDto;
  }

  throw new Error(ERROR_MESSAGE);
};

const mapDtoToDetail = (dto: ArticleMappingDto): ArticleMappingDetail => ({
  id: dto.id ?? undefined,
  version: dto.version ?? undefined,
  code: dto.code ?? '',
  description: dto.description ?? undefined,
  appendGeneratedCode: dto.appendGeneratedCode ?? undefined,
  mappingScriptCode: dto.mappingScript?.code ?? undefined,
  mappingScriptDescription: dto.mappingScript?.description ?? undefined,
});

export const useArticleMapping = (code: string | null | undefined) => {
  const sanitizedCode = normalizeCode(code);
  const queryKey = sanitizedCode
    ? queryKeys.articleMappings.detail(sanitizedCode)
    : queryKeys.articleMappings.detail('unknown');

  return useQuery<ArticleMappingDetail>({
    queryKey,
    enabled: sanitizedCode.length > 0,
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET(
        '/api/rest/v2/articleMapping/{code}' as never,
        { params: { path: { code: sanitizedCode } } } as never,
      );

      const payload = unwrapResponse<unknown>(
        { data: result.data as unknown, error: result.error },
        ERROR_MESSAGE,
      );

      const dto = extractArticleMapping(payload);
      return mapDtoToDetail(dto);
    },
    staleTime: 60_000,
  });
};

export const __internals = {
  normalizeCode,
  extractArticleMapping,
  mapDtoToDetail,
};
