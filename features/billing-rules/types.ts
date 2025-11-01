import type { components } from '@/lib/api/generated/schema';
import type { ActionStatus } from '@/features/customers/types';

export type BillingRuleDto = components['schemas']['BillingRuleDto'];

export type BillingRuleResponseDto = {
  actionStatus?: ActionStatus | null;
  billingRule?: BillingRuleDto | BillingRuleResponseDto | null;
  billingRules?: BillingRuleDto[] | BillingRuleResponseDto[] | null;
  result?: BillingRuleDto | BillingRuleResponseDto | BillingRuleDto[] | null;
  data?: BillingRuleDto | BillingRuleResponseDto | BillingRuleDto[] | null;
} & Record<string, unknown>;

export type BillingRuleFormValues = {
  id?: number;
  code: string;
  criteriaEL: string;
  invoicedBACodeEL: string;
  priority?: number | null;
};

export type BillingRuleDetail = BillingRuleFormValues;

export type BillingRuleListItem = {
  id?: number;
  code: string;
  criteriaEL: string;
  invoicedBACodeEL: string;
  priority?: number;
};

export type BillingRuleMutationVariables = {
  contractCode: string | null | undefined;
  values: BillingRuleFormValues;
};

export type BillingRuleDeleteVariables = {
  contractCode: string | null | undefined;
  id: number | string | null | undefined;
  code?: string | null | undefined;
};
