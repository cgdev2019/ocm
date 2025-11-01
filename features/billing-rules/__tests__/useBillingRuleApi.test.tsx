import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import {
  __internals,
  useBillingRuleMutations,
} from '@/features/billing-rules/api';
import { getApiClient, type ApiClient } from '@/lib/api/client';
import {
  actionStatusSuccessFixture,
  billingRuleDetailFixture,
  billingRuleDtoFixture,
  billingRuleFormValuesFixture,
  billingRuleResponseFixture,
} from '@/tests/fixtures/opencellDataset';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

describe('billing rule api', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const createWrapper = () => {
    const queryClient = new QueryClient();
    const invalidateSpy = jest.spyOn(queryClient, 'invalidateQueries');
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    return { wrapper, invalidateSpy };
  };

  it('normalizes contract code values', () => {
    expect(__internals.normalizeContractCode('  CONTRACT-001  ')).toBe('CONTRACT-001');
    expect(__internals.normalizeContractCode(null)).toBe('');
  });

  it('normalizes billing rule code values', () => {
    expect(__internals.normalizeBillingRuleCode('  BILL-RULE-001  ')).toBe('BILL-RULE-001');
    expect(__internals.normalizeBillingRuleCode(undefined)).toBe('');
  });

  it('normalizes identifier values', () => {
    expect(__internals.normalizeId(42)).toBe(42);
    expect(__internals.normalizeId('  501  ')).toBe(501);
    expect(__internals.normalizeId('foo')).toBeNull();
    expect(__internals.normalizeId(null)).toBeNull();
  });

  it('normalizes priority values', () => {
    expect(__internals.normalizePriority(10)).toBe(10);
    expect(__internals.normalizePriority(' 20 ')).toBe(20);
    expect(__internals.normalizePriority('abc')).toBeUndefined();
    expect(__internals.normalizePriority(null)).toBeUndefined();
  });

  it('maps dto to detail values', () => {
    expect(__internals.mapDtoToDetail(billingRuleDtoFixture)).toEqual(billingRuleDetailFixture);
  });

  it('maps form values to dto payload', () => {
    const values = {
      ...billingRuleFormValuesFixture,
      code: '  BILL-RULE-001  ',
      criteriaEL: "  input.subscription == 'STANDARD'  ",
      invoicedBACodeEL: "  billingAccount('DEFAULT')  ",
    };
    expect(__internals.mapFormToDto(values)).toEqual({
      id: 501,
      code: 'BILL-RULE-001',
      criteriaEL: "input.subscription == 'STANDARD'",
      invoicedBACodeEL: "billingAccount('DEFAULT')",
      priority: 10,
    });
  });

  it('extracts billing rule from nested responses', () => {
    const nested = {
      actionStatus: actionStatusSuccessFixture,
      data: {
        payload: {
          result: {
            billingRule: { ...billingRuleDtoFixture, id: 777 },
          },
        },
      },
    };
    expect(__internals.extractBillingRule(nested)).toEqual({ ...billingRuleDtoFixture, id: 777 });
  });

  it('creates a billing rule using API V2', async () => {
    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: billingRuleResponseFixture });

    const { wrapper, invalidateSpy } = createWrapper();
    const { result } = renderHook(() => useBillingRuleMutations(), { wrapper });

    const response = await result.current.create.mutateAsync({
      contractCode: '  CONTRACT-001  ',
      values: billingRuleFormValuesFixture,
    });

    await waitFor(() => expect(result.current.create.isSuccess).toBe(true));

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/v2/cpq/contracts/{contractCode}/billingRule', {
      params: { path: { contractCode: 'CONTRACT-001' } },
      body: __internals.mapFormToDto(billingRuleFormValuesFixture),
    });
    expect(response).toEqual(billingRuleDetailFixture);
    expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['contracts', 'billingRules', 'CONTRACT-001'] });
    expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['contracts', 'detail', 'CONTRACT-001'] });
    expect(invalidateSpy).toHaveBeenCalledWith({
      queryKey: ['contracts', 'billingRule', 'CONTRACT-001', 501],
    });
    expect(invalidateSpy).toHaveBeenCalledWith({
      queryKey: ['contracts', 'billingRuleByCode', 'CONTRACT-001', 'BILL-RULE-001'],
    });
  });

  it('falls back to form detail when creation response has no payload', async () => {
    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: actionStatusSuccessFixture });

    const { wrapper } = createWrapper();
    const { result } = renderHook(() => useBillingRuleMutations(), { wrapper });

    const response = await result.current.create.mutateAsync({
      contractCode: 'CONTRACT-001',
      values: {
        ...billingRuleFormValuesFixture,
        code: '  BILL-RULE-001  ',
        criteriaEL: "  input.subscription == 'STANDARD'  ",
        invoicedBACodeEL: "  billingAccount('DEFAULT')  ",
      },
    });

    expect(response).toEqual(billingRuleDetailFixture);
  });

  it('updates a billing rule using API V2', async () => {
    const apiClient = { PUT: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.PUT as jest.Mock).mockResolvedValue({ data: billingRuleResponseFixture });

    const { wrapper, invalidateSpy } = createWrapper();
    const { result } = renderHook(() => useBillingRuleMutations(), { wrapper });

    await result.current.update.mutateAsync({
      contractCode: '  CONTRACT-001  ',
      values: billingRuleFormValuesFixture,
    });

    expect(apiClient.PUT).toHaveBeenCalledWith('/api/rest/v2/cpq/contracts/{contractCode}/billingRule/{id}', {
      params: { path: { contractCode: 'CONTRACT-001', id: 501 } },
      body: __internals.mapFormToDto(billingRuleFormValuesFixture),
    });
    expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['contracts', 'billingRules', 'CONTRACT-001'] });
    expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['contracts', 'detail', 'CONTRACT-001'] });
    expect(invalidateSpy).toHaveBeenCalledWith({
      queryKey: ['contracts', 'billingRule', 'CONTRACT-001', 501],
    });
    expect(invalidateSpy).toHaveBeenCalledWith({
      queryKey: ['contracts', 'billingRuleByCode', 'CONTRACT-001', 'BILL-RULE-001'],
    });
  });

  it('deletes a billing rule using API V2', async () => {
    const apiClient = { DELETE: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.DELETE as jest.Mock).mockResolvedValue({
      data: { actionStatus: actionStatusSuccessFixture, billingRule: billingRuleDtoFixture },
    });

    const { wrapper, invalidateSpy } = createWrapper();
    const { result } = renderHook(() => useBillingRuleMutations(), { wrapper });

    await result.current.remove.mutateAsync({
      contractCode: '  CONTRACT-001  ',
      id: ' 501 ',
      code: '  BILL-RULE-001  ',
    });

    expect(apiClient.DELETE).toHaveBeenCalledWith('/api/rest/v2/cpq/contracts/{contractCode}/billingRule/{id}', {
      params: { path: { contractCode: 'CONTRACT-001', id: 501 } },
    });
    expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['contracts', 'billingRules', 'CONTRACT-001'] });
    expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['contracts', 'detail', 'CONTRACT-001'] });
    expect(invalidateSpy).toHaveBeenCalledWith({
      queryKey: ['contracts', 'billingRule', 'CONTRACT-001', 501],
    });
    expect(invalidateSpy).toHaveBeenCalledWith({
      queryKey: ['contracts', 'billingRuleByCode', 'CONTRACT-001', 'BILL-RULE-001'],
    });
  });
});
