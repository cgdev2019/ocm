import type { components } from '@/lib/api/generated/schema';
import type { ActionStatus } from '@/features/customers/types';

export type ArticleMappingLineDto = components['schemas']['ArticleMappingLine'];
export type AttributeMappingDto = components['schemas']['AttributeMapping'];

export type ArticleMappingLineResponseDto = {
  actionStatus?: ActionStatus | null;
  articleMappingLine?: ArticleMappingLineDto | null;
  articleMappingLineDto?: ArticleMappingLineDto | ArticleMappingLineResponseDto | null;
  result?: ArticleMappingLineDto | ArticleMappingLineResponseDto | ArticleMappingLineDto[] | null;
  data?: ArticleMappingLineDto | ArticleMappingLineResponseDto | ArticleMappingLineDto[] | null;
  articleMappingLines?: ArticleMappingLineDto[] | ArticleMappingLineResponseDto[] | null;
} & Record<string, unknown>;

export type AttributeMappingFormValue = {
  id?: number;
  attributeCode?: string;
  operator: AttributeMappingDto['operator'];
  attributeValue?: string;
};

export type ArticleMappingLineFormValues = {
  id?: number;
  code: string;
  description?: string;
  articleMappingCode?: string;
  accountingArticleCode?: string;
  attributeOperator: ArticleMappingLineDto['attributeOperator'];
  attributes: AttributeMappingFormValue[];
  offerTemplateCode?: string;
  productCode?: string;
  chargeTemplateCode?: string;
  parameter1?: string;
  parameter2?: string;
  parameter3?: string;
  mappingKeyEL?: string;
};

export type ArticleMappingLineDetail = ArticleMappingLineFormValues;

export type ArticleMappingLineListItem = {
  id?: number;
  code: string;
  description?: string;
  articleMappingCode?: string;
  accountingArticleCode?: string;
  offerTemplateCode?: string;
  productCode?: string;
  chargeTemplateCode?: string;
};
