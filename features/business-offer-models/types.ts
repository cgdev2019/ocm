import type { BusinessOfferModelFormSchema } from '@/features/business-offer-models/schema';
import type { components } from '@/lib/api/generated/schema';

export type BusinessOfferModelDto = components['schemas']['BusinessOfferModelDto'];
export type GetBusinessOfferModelResponseDto = components['schemas']['GetBusinessOfferModelResponseDto'];
export type MeveoModuleDtosResponse = components['schemas']['MeveoModuleDtosResponse'];
export type ActionStatus = components['schemas']['ActionStatus'];
export type PagingAndFiltering = components['schemas']['PagingAndFiltering'];

export type BusinessOfferModelFormValues = BusinessOfferModelFormSchema;

export type BusinessOfferModelListItem = {
  code: string;
  description?: string;
  license?: BusinessOfferModelDto['license'];
  disabled?: boolean;
};

export type BusinessOfferModelListParams = {
  query?: string | null;
};
