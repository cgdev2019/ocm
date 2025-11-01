import type { OfferTemplateCategoryFormSchema } from '@/features/offer-template-categories/schema';
import type { components } from '@/lib/api/generated/schema';

export type OfferTemplateCategoryDto = components['schemas']['OfferTemplateCategoryDto'];
export type GetOfferTemplateCategoryResponseDto = components['schemas']['GetOfferTemplateCategoryResponseDto'];
export type OfferTemplateCategoriesResponseDto = components['schemas']['OfferTemplateCategoriesResponseDto'];
export type ActionStatus = components['schemas']['ActionStatus'];

export type OfferTemplateCategoryFormValues = OfferTemplateCategoryFormSchema;

export type OfferTemplateCategoryListItem = {
  code: string;
  name?: string;
  description?: string;
  active?: boolean;
  disabled?: boolean;
};

export type OfferTemplateCategoryListParams = {
  query?: string | null;
};
