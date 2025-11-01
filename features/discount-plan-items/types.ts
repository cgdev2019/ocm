import type { DiscountPlanItemFormSchema } from '@/features/discount-plan-items/schema';
import type { components } from '@/lib/api/generated/schema';

export type DiscountPlanItemDto = components['schemas']['DiscountPlanItemDto'];
export type DiscountPlanItemResponseDto = components['schemas']['DiscountPlanItemResponseDto'];
export type DiscountPlanItemsResponseDto = components['schemas']['DiscountPlanItemsResponseDto'];
export type ActionStatus = components['schemas']['ActionStatus'];

export type DiscountPlanItemFormValues = DiscountPlanItemFormSchema;

export type DiscountPlanItemListItem = {
  code: string;
  description?: string;
  discountPlanCode?: string;
  discountPlanItemType?: DiscountPlanItemDto['discountPlanItemType'];
  discountValue?: number;
};

export type DiscountPlanItemListParams = {
  query?: string | null;
};
