import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import {
  type ChargeAggregateDto,
  type UsageChargeAggregateListItem,
  type UsageChargeAggregateResponseDto,
  type UsageListItem,
  type UsageResponseDto,
  type UsageSearchCriteria,
} from '@/features/usage/types';

const sanitizeCriteria = (criteria: UsageSearchCriteria | null | undefined) =>
  criteria
    ? {
        userAccountCode: criteria.userAccountCode,
        fromDate: criteria.fromDate ?? null,
        toDate: criteria.toDate ?? null,
      }
    : undefined;

const adaptUsageList = (payload: UsageResponseDto | null | undefined): UsageListItem[] => {
  const items: UsageListItem[] = [];
  if (!payload?.listCatUsage) {
    return items;
  }
  payload.listCatUsage.forEach((category, categoryIndex) => {
    const catCode = category?.code ?? '';
    const catDescription = category?.description ?? undefined;
    category?.listSubCatUsage?.forEach((subCategory, subIndex) => {
      const subCode = subCategory?.code ?? undefined;
      const subDescription = subCategory?.description ?? undefined;
      subCategory?.listUsage?.forEach((usage, usageIndex) => {
        const id = [
          catCode || `cat-${categoryIndex}`,
          subCode || `sub-${subIndex}`,
          usage?.code || `usage-${usageIndex}`,
          usage?.dateEvent || usageIndex.toString(),
        ].join('::');
        items.push({
          id,
          categoryCode: catCode,
          categoryDescription: catDescription,
          subCategoryCode: subCode,
          subCategoryDescription: subDescription,
          dateEvent: usage?.dateEvent ?? undefined,
          code: usage?.code ?? undefined,
          description: usage?.description ?? undefined,
          unityDescription: usage?.unityDescription ?? undefined,
          unitAmountWithoutTax: usage?.unitAmountWithoutTax ?? undefined,
          quantity: usage?.quantity ?? undefined,
          amountWithoutTax: usage?.amountWithoutTax ?? undefined,
          parameter1: usage?.parameter1 ?? undefined,
          parameter2: usage?.parameter2 ?? undefined,
          parameter3: usage?.parameter3 ?? undefined,
          parameterExtra: usage?.parameterExtra ?? undefined,
          offerCode: usage?.offerCode ?? undefined,
          priceplanCode: usage?.priceplanCode ?? undefined,
        });
      });
    });
  });
  return items;
};

const adaptChargeAggregate = (
  aggregates: ChargeAggregateDto[] | null | undefined,
): UsageChargeAggregateListItem[] => {
  if (!aggregates) {
    return [];
  }
  return aggregates.map((aggregate, index) => ({
    id: `${aggregate?.description ?? 'aggregate'}-${index}`,
    description: aggregate?.description ?? undefined,
    quantity: aggregate?.quantity ?? undefined,
    amount: aggregate?.amount ?? undefined,
  }));
};

export const useUsageSearch = (criteria: UsageSearchCriteria | null) => {
  const queryCriteria = useMemo(() => sanitizeCriteria(criteria), [criteria]);

  return useQuery({
    queryKey: queryKeys.usage.search(queryCriteria),
    enabled: Boolean(queryCriteria),
    queryFn: async () => {
      if (!criteria) {
        return [] as UsageListItem[];
      }
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/usage', {
        params: {
          query: {
            userAccountCode: criteria.userAccountCode,
            fromDate: criteria.fromDate,
            toDate: criteria.toDate,
          },
        },
      });
      const payload = unwrapResponse<UsageResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load usage history',
      );
      assertActionSuccess(payload?.actionStatus, 'Usage history request failed');
      return adaptUsageList(payload);
    },
  });
};

export const useUsageChargeAggregate = (criteria: UsageSearchCriteria | null) => {
  const queryCriteria = useMemo(() => sanitizeCriteria(criteria), [criteria]);

  return useQuery({
    queryKey: queryKeys.usage.chargeAggregate(queryCriteria),
    enabled: Boolean(queryCriteria),
    queryFn: async () => {
      if (!criteria) {
        return [] as UsageChargeAggregateListItem[];
      }
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/usage/chargeAggregate', {
        params: {
          query: {
            userAccountCode: criteria.userAccountCode,
            fromDate: criteria.fromDate,
            toDate: criteria.toDate,
          },
        },
      });
      const payload = unwrapResponse<UsageChargeAggregateResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load usage aggregates',
      );
      assertActionSuccess(payload?.actionStatus, 'Usage aggregate request failed');
      return adaptChargeAggregate(payload?.listChargeAggregate);
    },
  });
};

export const useUsageVersion = () =>
  useQuery({
    queryKey: queryKeys.usage.version(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/usage/version');
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to load usage service version',
      );
      assertActionSuccess(payload, 'Usage version request failed');
      return payload.message ?? '';
    },
  });
