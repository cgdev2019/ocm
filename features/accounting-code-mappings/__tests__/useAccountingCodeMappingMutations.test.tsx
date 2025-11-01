import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react';
import {
  mapAccountingCodeMappingFormToDto,
  mapAccountingCodeMappingInputToForm,
  useAccountingCodeMappingMutations,
} from '@/features/accounting-code-mappings/api';
import { getApiClient, type ApiClient } from '@/lib/api/client';
import {
  accountingCodeMappingFormFixture,
  accountingCodeMappingInputFixture,
} from '@/tests/fixtures/accountingCodeMapping';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

describe('accounting code mapping api', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('maps input to form values', () => {
    expect(mapAccountingCodeMappingInputToForm(accountingCodeMappingInputFixture)).toEqual(
      accountingCodeMappingFormFixture,
    );
  });

  it('maps form values to dto payload', () => {
    expect(mapAccountingCodeMappingFormToDto(accountingCodeMappingFormFixture)).toEqual(
      accountingCodeMappingInputFixture,
    );
  });

  describe('mutations', () => {
    const renderWithClient = () => {
      const queryClient = new QueryClient();
      const invalidateSpy = jest.spyOn(queryClient, 'invalidateQueries');
      const wrapper = ({ children }: { children: ReactNode }) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      );
      return { wrapper, invalidateSpy };
    };

    it('creates an accounting code mapping using API V2', async () => {
      const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
      mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
      (apiClient.POST as jest.Mock).mockResolvedValue({ data: accountingCodeMappingInputFixture });

      const { wrapper, invalidateSpy } = renderWithClient();
      const { result } = renderHook(() => useAccountingCodeMappingMutations(), { wrapper });

      await result.current.create.mutateAsync(accountingCodeMappingFormFixture);

      expect(apiClient.POST).toHaveBeenCalledWith('/v2/articles/accountingCodeMapping', {
        body: accountingCodeMappingInputFixture,
      });
      expect(invalidateSpy).toHaveBeenCalledWith({
        queryKey: ['accountingCodeMappings', 'detail', accountingCodeMappingFormFixture.accountingArticleCode],
      });
    });

    it('updates an accounting code mapping using API V2', async () => {
      const apiClient = { PUT: jest.fn() } as Partial<ApiClient>;
      mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
      (apiClient.PUT as jest.Mock).mockResolvedValue({ data: accountingCodeMappingInputFixture });

      const { wrapper, invalidateSpy } = renderWithClient();
      const { result } = renderHook(() => useAccountingCodeMappingMutations(), { wrapper });

      await result.current.update.mutateAsync(accountingCodeMappingFormFixture);

      expect(apiClient.PUT).toHaveBeenCalledWith(
        '/v2/articles/{accountingArticleCode}/accountingCodeMapping',
        {
          params: { path: { accountingArticleCode: accountingCodeMappingFormFixture.accountingArticleCode } },
          body: accountingCodeMappingInputFixture,
        },
      );
      expect(invalidateSpy).toHaveBeenCalledWith({
        queryKey: ['accountingCodeMappings', 'detail', accountingCodeMappingFormFixture.accountingArticleCode],
      });
    });
  });
});
