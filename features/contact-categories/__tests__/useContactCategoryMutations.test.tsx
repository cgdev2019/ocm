import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react';
import { useContactCategoryMutations, __internals } from '@/features/contact-categories/api';
import { getApiClient, type ApiClient } from '@/lib/api/client';
import { contactCategoryFormValuesFixture } from '@/tests/fixtures/opencellDataset';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

describe('contact category mutations', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const createWrapper = () => {
    const queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } },
    });
    const invalidateSpy = jest.spyOn(queryClient, 'invalidateQueries');
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    return { wrapper, invalidateSpy };
  };

  it('maps form values to DTO payload', () => {
    expect(__internals.mapFormToDto(contactCategoryFormValuesFixture)).toEqual({
      code: 'SUPPORT',
      description: 'Support contacts',
      id: 101,
    });
  });

  it('creates a contact category using API V2', async () => {
    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: { actionStatus: { status: 'SUCCESS' } } });

    const { wrapper, invalidateSpy } = createWrapper();
    const { result } = renderHook(() => useContactCategoryMutations(), { wrapper });

    await result.current.create.mutateAsync(contactCategoryFormValuesFixture);

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/v2/account/contactCategory', {
      body: __internals.mapFormToDto(contactCategoryFormValuesFixture),
    });
    expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['contactCategories'] });
    expect(invalidateSpy).toHaveBeenCalledWith({
      queryKey: ['contactCategories', 'detail', 'SUPPORT'],
    });
  });

  it('updates a contact category using API V2', async () => {
    const apiClient = { PUT: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.PUT as jest.Mock).mockResolvedValue({ data: { actionStatus: { status: 'SUCCESS' } } });

    const { wrapper, invalidateSpy } = createWrapper();
    const { result } = renderHook(() => useContactCategoryMutations(), { wrapper });

    await result.current.update.mutateAsync(contactCategoryFormValuesFixture);

    expect(apiClient.PUT).toHaveBeenCalledWith(
      '/api/rest/v2/account/contactCategory/{contactCategoryCode}',
      {
        params: { path: { contactCategoryCode: 'SUPPORT' } },
        body: __internals.mapFormToDto(contactCategoryFormValuesFixture),
      },
    );
    expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['contactCategories'] });
    expect(invalidateSpy).toHaveBeenCalledWith({
      queryKey: ['contactCategories', 'detail', 'SUPPORT'],
    });
  });

  it('deletes a contact category using API V2', async () => {
    const apiClient = { DELETE: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.DELETE as jest.Mock).mockResolvedValue({ data: { actionStatus: { status: 'SUCCESS' } } });

    const { wrapper, invalidateSpy } = createWrapper();
    const { result } = renderHook(() => useContactCategoryMutations(), { wrapper });

    await result.current.remove.mutateAsync(' SUPPORT ');

    expect(apiClient.DELETE).toHaveBeenCalledWith(
      '/api/rest/v2/account/contactCategory/{contactCategoryCode}',
      { params: { path: { contactCategoryCode: 'SUPPORT' } } },
    );
    expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['contactCategories'] });
    expect(invalidateSpy).toHaveBeenCalledWith({
      queryKey: ['contactCategories', 'detail', 'SUPPORT'],
    });
  });
});
