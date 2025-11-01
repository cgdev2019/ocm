import type { DiscountPlanFormSchema } from '@/features/discount-plans/schema';
import type { components } from '@/lib/api/generated/schema';

export type DiscountPlanDto = components['schemas']['DiscountPlanDto'];
export type GetDiscountPlanResponseDto = components['schemas']['GetDiscountPlanResponseDto'];
export type GetDiscountPlansResponseDto = components['schemas']['GetDiscountPlansResponseDto'];
export type DiscountPlansDto = components['schemas']['DiscountPlansDto'];
export type ActionStatus = components['schemas']['ActionStatus'];

export type DiscountPlanFormValues = DiscountPlanFormSchema;

export type DiscountPlanListItem = {
  code: string;
  description?: string;
  discountPlanType?: DiscountPlanDto['discountPlanType'];
  status?: DiscountPlanDto['status'];
  startDate?: string;
  endDate?: string;
};

export type DiscountPlanListParams = {
  query?: string | null;
};
