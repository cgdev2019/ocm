import type { BundleTemplateFormSchema } from '@/features/bundle-templates/schema';
import type { components } from '@/lib/api/generated/schema';

export type BundleTemplateDto = components['schemas']['BundleTemplateDto'];
export type BundleProductTemplateDto = components['schemas']['BundleProductTemplateDto'];
export type ProductChargeTemplateDto = components['schemas']['ProductChargeTemplateDto'];
export type WalletTemplateDto = components['schemas']['WalletTemplateDto'];
export type ActionStatus = components['schemas']['ActionStatus'];

export type BundleTemplateFormValues = BundleTemplateFormSchema;
