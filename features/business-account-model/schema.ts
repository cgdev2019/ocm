import { z } from 'zod';
import {
  BUSINESS_ACCOUNT_MODEL_HIERARCHY_TYPES,
  BUSINESS_ACCOUNT_MODEL_LICENSES,
} from '@/features/business-account-model/types';

export const businessAccountModelFormSchema = z.object({
  code: z.string().min(1, 'forms.required'),
  description: z.string().optional(),
  hierarchyType: z.enum(BUSINESS_ACCOUNT_MODEL_HIERARCHY_TYPES).optional(),
  license: z.enum(BUSINESS_ACCOUNT_MODEL_LICENSES).optional(),
  disabled: z.boolean().optional(),
});

export type BusinessAccountModelFormSchema = z.infer<typeof businessAccountModelFormSchema>;
