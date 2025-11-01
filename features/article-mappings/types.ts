import type { components } from '@/lib/api/generated/schema';
import type { ActionStatus } from '@/features/customers/types';

export type ArticleMappingDto = components['schemas']['ArticleMapping'];

export type ArticleMappingResponseDto = {
  actionStatus?: ActionStatus;
  articleMapping?: ArticleMappingDto | null;
  data?: ArticleMappingDto | ArticleMappingResponseDto | null;
  result?: ArticleMappingDto | ArticleMappingResponseDto | null;
} & Record<string, unknown>;

export type ArticleMappingDetail = {
  id?: number;
  version?: number;
  code: string;
  description?: string;
  appendGeneratedCode?: boolean;
  mappingScriptCode?: string;
  mappingScriptDescription?: string;
};
