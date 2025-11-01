import type { components } from '@/lib/api/generated/schema';
import type { ActionStatus } from '@/features/customers/types';

export type AccountingArticleDto = components['schemas']['AccountingArticle'];
export type ArticleMappingDto = components['schemas']['ArticleMapping'];
export type LanguageDescriptionDto = components['schemas']['LanguageDescriptionDto'];
export type ResourceDto = components['schemas']['Resource'];
export type CustomFieldsDto = components['schemas']['CustomFieldsDto'];

export type AccountingArticleListParams = {
  limit: number;
  offset: number;
  sort?: string | null;
  orderBy?: 'ASC' | 'DESC' | null;
};

export type AccountingArticleListItem = {
  code: string;
  description?: string;
  invoiceSubCategoryCode?: string;
  taxClassCode?: string;
  accountingCode?: string;
  articleFamilyCode?: string;
  unitPrice?: number;
  ignoreAggregation?: boolean;
};

export type AccountingArticleListPaging = {
  totalRecords: number;
  limit: number;
  offset: number;
  sort?: string | null;
  orderBy?: AccountingArticleListParams['orderBy'];
};

export type AccountingArticleList = {
  items: AccountingArticleListItem[];
  paging: AccountingArticleListPaging;
};

export type AccountingArticleListResponseDto = {
  actionStatus?: ActionStatus;
  accountingArticles?: AccountingArticleDto[];
  totalRecords?: number;
};

export type AccountingArticleResponseDto = {
  actionStatus?: ActionStatus;
  accountingArticle?: AccountingArticleDto;
};

export type AccountingArticleProductResponseDto = {
  actionStatus?: ActionStatus;
  accountingArticles?: AccountingArticleDto[];
};

export type LanguageDescriptionFormValue = {
  languageCode: string;
  description: string;
};

export type AccountingArticleFormValues = {
  id?: number;
  code: string;
  description: string;
  invoiceSubCategoryCode: string;
  taxClassCode: string;
  accountingCode?: string;
  articleFamilyCode?: string;
  invoiceTypeCode?: string;
  invoiceTypeEl?: string;
  accountingCodeEl?: string;
  columnCriteriaEl?: string;
  analyticCode1?: string;
  analyticCode2?: string;
  analyticCode3?: string;
  unitPrice?: string;
  ignoreAggregation: boolean;
  languageDescriptions: LanguageDescriptionFormValue[];
  customFieldsJson?: string;
};

export type AccountingArticleDetailValues = AccountingArticleFormValues;
