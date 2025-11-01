import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  AccountingArticleDetailValues,
  AccountingArticleDto,
  AccountingArticleFormValues,
  AccountingArticleList,
  AccountingArticleListItem,
  AccountingArticleListParams,
  AccountingArticleListResponseDto,
  AccountingArticleProductResponseDto,
  AccountingArticleResponseDto,
  ArticleMappingDto,
  CustomFieldsDto,
  LanguageDescriptionFormValue,
  ResourceDto,
} from '@/features/accounting-articles/types';

export const DEFAULT_ACCOUNTING_ARTICLES_PAGE_SIZE = 20;

const toResource = (code?: string | null): ResourceDto | undefined => {
  if (!code || code.trim().length === 0) {
    return undefined;
  }
  return { code: code.trim() } as ResourceDto;
};

const parseUnitPrice = (value?: string) => {
  if (!value || value.trim().length === 0) {
    return undefined;
  }
  const parsed = Number(value);
  return Number.isNaN(parsed) ? undefined : parsed;
};

const parseCustomFields = (json?: string): CustomFieldsDto | undefined => {
  if (!json || json.trim().length === 0) {
    return undefined;
  }
  try {
    return JSON.parse(json) as CustomFieldsDto;
  } catch {
    return undefined;
  }
};

const mapLanguageDescriptions = (
  entries: LanguageDescriptionFormValue[] | undefined,
): AccountingArticleDto['languageDescriptions'] => {
  if (!entries) {
    return undefined;
  }

  const mapped = entries
    .filter((entry) => entry.languageCode.trim().length > 0 && entry.description.trim().length > 0)
    .map((entry) => ({ languageCode: entry.languageCode.trim(), description: entry.description.trim() }));

  return mapped.length > 0 ? mapped : undefined;
};

const mapDtoToListItem = (dto: AccountingArticleDto): AccountingArticleListItem => ({
  code: dto.code ?? '',
  description: dto.description ?? undefined,
  invoiceSubCategoryCode: dto.invoiceSubCategory?.code ?? undefined,
  taxClassCode: dto.taxClass?.code ?? undefined,
  accountingCode: dto.accountingCode?.code ?? undefined,
  articleFamilyCode: dto.articleFamily?.code ?? undefined,
  unitPrice: dto.unitPrice ?? undefined,
  ignoreAggregation: dto.ignoreAggregation ?? undefined,
});

const mapDtoToFormValues = (dto: AccountingArticleDto): AccountingArticleDetailValues => ({
  id: dto.id ?? undefined,
  code: dto.code ?? '',
  description: dto.description ?? '',
  invoiceSubCategoryCode: dto.invoiceSubCategory?.code ?? '',
  taxClassCode: dto.taxClass?.code ?? '',
  accountingCode: dto.accountingCode?.code ?? undefined,
  articleFamilyCode: dto.articleFamily?.code ?? undefined,
  invoiceTypeCode: dto.invoiceType?.code ?? undefined,
  invoiceTypeEl: dto.invoiceTypeEl ?? undefined,
  accountingCodeEl: dto.accountingCodeEl ?? undefined,
  columnCriteriaEl: dto.columCriteriaEL ?? undefined,
  analyticCode1: dto.analyticCode1 ?? undefined,
  analyticCode2: dto.analyticCode2 ?? undefined,
  analyticCode3: dto.analyticCode3 ?? undefined,
  unitPrice: dto.unitPrice !== undefined && dto.unitPrice !== null ? String(dto.unitPrice) : undefined,
  ignoreAggregation: dto.ignoreAggregation ?? false,
  languageDescriptions:
    dto.languageDescriptions?.map((item) => ({
      languageCode: item.languageCode ?? '',
      description: item.description ?? '',
    })) ?? [],
  customFieldsJson: dto.customFields ? JSON.stringify(dto.customFields, null, 2) : undefined,
});

const mapFormToDto = (values: AccountingArticleFormValues): AccountingArticleDto => ({
  id: values.id,
  code: values.code,
  description: values.description,
  invoiceSubCategory: toResource(values.invoiceSubCategoryCode),
  taxClass: toResource(values.taxClassCode),
  accountingCode: toResource(values.accountingCode),
  articleFamily: toResource(values.articleFamilyCode),
  invoiceType: toResource(values.invoiceTypeCode),
  invoiceTypeEl: values.invoiceTypeEl || undefined,
  accountingCodeEl: values.accountingCodeEl || undefined,
  columCriteriaEL: values.columnCriteriaEl || undefined,
  analyticCode1: values.analyticCode1 || undefined,
  analyticCode2: values.analyticCode2 || undefined,
  analyticCode3: values.analyticCode3 || undefined,
  unitPrice: parseUnitPrice(values.unitPrice),
  ignoreAggregation: values.ignoreAggregation,
  languageDescriptions: mapLanguageDescriptions(values.languageDescriptions),
  customFields: parseCustomFields(values.customFieldsJson),
});

const getFromApi = async <T>(path: string, options?: Record<string, unknown>) => {
  const client = getApiClient() as unknown as {
    GET: (input: string, opts?: Record<string, unknown>) => Promise<{ data?: T; error?: unknown }>;
  };
  return client.GET(path, options);
};

const postToApi = async <T>(path: string, options?: Record<string, unknown>) => {
  const client = getApiClient() as unknown as {
    POST: (input: string, opts?: Record<string, unknown>) => Promise<{ data?: T; error?: unknown }>;
  };
  return client.POST(path, options);
};

const putToApi = async <T>(path: string, options?: Record<string, unknown>) => {
  const client = getApiClient() as unknown as {
    PUT: (input: string, opts?: Record<string, unknown>) => Promise<{ data?: T; error?: unknown }>;
  };
  return client.PUT(path, options);
};

const deleteFromApi = async <T>(path: string, options?: Record<string, unknown>) => {
  const client = getApiClient() as unknown as {
    DELETE: (input: string, opts?: Record<string, unknown>) => Promise<{ data?: T; error?: unknown }>;
  };
  return client.DELETE(path, options);
};

export const useAccountingArticles = (params: AccountingArticleListParams) => {
  const queryParams = {
    offset: params.offset,
    limit: params.limit,
    ...(params.sort ? { sort: params.sort } : {}),
    ...(params.orderBy ? { orderBy: params.orderBy } : {}),
  } as const;

  return useQuery({
    queryKey: queryKeys.accountingArticles.list(queryParams),
    keepPreviousData: true,
    queryFn: async (): Promise<AccountingArticleList> => {
      const result = await getFromApi<AccountingArticleListResponseDto>('/api/rest/v2/articles', {
        params: { query: queryParams },
      });
      const payload = unwrapResponse<AccountingArticleListResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load accounting articles',
      );
      assertActionSuccess(payload.actionStatus, 'Accounting articles endpoint returned an error');
      const items = (payload.accountingArticles ?? []).map((item) => mapDtoToListItem(item));
      const totalRecords = payload.totalRecords ?? payload.accountingArticles?.length ?? 0;

      return {
        items,
        paging: {
          totalRecords,
          limit: params.limit,
          offset: params.offset,
          sort: params.sort ?? null,
          orderBy: params.orderBy ?? null,
        },
      };
    },
  });
};

export const useAccountingArticle = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.accountingArticles.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      if (!code) {
        return null as AccountingArticleDetailValues | null;
      }

      const result = await getFromApi<AccountingArticleResponseDto>(
        '/articles/{accountingArticleCode}',
        { params: { path: { accountingArticleCode: code } } },
      );
      const payload = unwrapResponse<AccountingArticleResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load accounting article',
      );
      assertActionSuccess(payload.actionStatus, 'Accounting article retrieval failed');
      return payload.accountingArticle ? mapDtoToFormValues(payload.accountingArticle) : null;
    },
  });

export const useAccountingArticleMutations = () => {
  const queryClient = useQueryClient();

  const invalidateList = () => {
    queryClient.invalidateQueries({ queryKey: queryKeys.accountingArticles.root });
  };

  const invalidateDetail = (code: string | undefined) => {
    if (code) {
      queryClient.invalidateQueries({ queryKey: queryKeys.accountingArticles.detail(code) });
    }
  };

  const create = useMutation({
    mutationFn: async (values: AccountingArticleFormValues) => {
      const dto = mapFormToDto(values);
      const result = await postToApi<ActionStatus>('/articles', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to create accounting article',
      );
      assertActionSuccess(payload, 'Accounting article creation failed');
      return payload;
    },
    onSuccess: (_status, variables) => {
      invalidateList();
      invalidateDetail(variables.code);
    },
  });

  const update = useMutation({
    mutationFn: async (values: AccountingArticleFormValues) => {
      if (!values.id) {
        throw new Error('Missing accounting article identifier for update');
      }
      const dto = mapFormToDto(values);
      const result = await putToApi<ActionStatus>('/api/rest/v2/articles/{id}', {
        params: { path: { id: values.id } },
        body: dto,
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to update accounting article',
      );
      assertActionSuccess(payload, 'Accounting article update failed');
      return payload;
    },
    onSuccess: (_status, variables) => {
      invalidateList();
      invalidateDetail(variables.code);
    },
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const result = await deleteFromApi<ActionStatus>('/api/rest/v2/articles/{accountingArticleCode}', {
        params: { path: { accountingArticleCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to delete accounting article',
      );
      assertActionSuccess(payload, 'Accounting article deletion failed');
      return payload;
    },
    onSuccess: (_status, code) => {
      invalidateList();
      invalidateDetail(code);
    },
  });

  return useMemo(
    () => ({
      create,
      update,
      remove,
    }),
    [create, remove, update],
  );
};

export const useAccountingArticlesByProduct = (
  productCode: string | null,
  attributes?: Record<string, unknown>,
) =>
  useQuery({
    queryKey: queryKeys.accountingArticles.byProduct(productCode ?? 'unknown', attributes ?? {}),
    enabled: Boolean(productCode),
    queryFn: async () => {
      if (!productCode) {
        return [] as AccountingArticleListItem[];
      }

      const queryAttributes: Record<string, unknown> | undefined = attributes && Object.keys(attributes).length > 0
        ? attributes
        : undefined;

      const result = await getFromApi<AccountingArticleProductResponseDto>(
        '/articles/products/{productCode}',
        {
          params: {
            path: { productCode },
            query: queryAttributes,
          },
        },
      );
      const payload = unwrapResponse<AccountingArticleProductResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load accounting articles for product',
      );
      assertActionSuccess(payload.actionStatus, 'Accounting article product lookup failed');
      return (payload.accountingArticles ?? []).map((item) => mapDtoToListItem(item));
    },
  });

export const useArticleMappingCreation = () =>
  useMutation({
    mutationFn: async (mapping: ArticleMappingDto) => {
      const result = await postToApi<ActionStatus>('/api/rest/v2/articleMapping', { body: mapping });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to create article mapping',
      );
      assertActionSuccess(payload, 'Article mapping creation failed');
      return payload;
    },
  });
