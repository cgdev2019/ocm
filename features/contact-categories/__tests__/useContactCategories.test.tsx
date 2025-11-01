import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { __internals, useContactCategories, useContactCategory } from '@/features/contact-categories/api';
import { getApiClient, type ApiClient } from '@/lib/api/client';
import {
  contactCategoryDetailFixture,
  contactCategoryDtoFixture,
  contactCategoryFormValuesFixture,
  contactCategoryListItemFixture,
  contactCategoryListResponseFixture,
} from '@/tests/fixtures/opencellDataset';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

describe('contact categories api', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const createWrapper = () => {
    const queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } },
    });
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    return { wrapper, queryClient };
  };

  it('builds list requests with pagination and search filters', () => {
    expect(
      __internals.buildListRequest({ page: 2, pageSize: 20, search: ' Support ' }),
    ).toEqual({
      limit: 20,
      offset: 40,
      genericFields: ['code', 'description', 'id'],
      sortBy: 'auditable.created',
      sortOrder: 'DESCENDING',
      filters: { code: 'support', description: 'support' },
    });
  });

  it('maps DTO values to detail form values', () => {
    expect(__internals.mapDtoToDetail(contactCategoryDtoFixture)).toEqual(
      contactCategoryDetailFixture,
    );
  });

  it('maps form values to DTO payload', () => {
    expect(__internals.mapFormToDto(contactCategoryFormValuesFixture)).toEqual({
      code: 'SUPPORT',
      description: 'Support contacts',
      id: 101,
    });
  });

  it('loads contact category list using API V2', async () => {
    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: contactCategoryListResponseFixture });

    const { wrapper } = createWrapper();
    const { result } = renderHook(
      () => useContactCategories({ page: 0, pageSize: 50, search: '' }),
      { wrapper },
    );

    await waitFor(() => expect(result.current.data).toBeDefined());

    expect(apiClient.POST).toHaveBeenCalledWith(
      '/api/rest/v2/generic/all/{entityName}',
      expect.objectContaining({ params: { path: { entityName: 'ContactCategory' } } }),
    );
    expect(result.current.data?.items).toEqual([contactCategoryListItemFixture]);
    expect(result.current.data?.paging.totalRecords).toBe(1);
  });

  it('loads a single contact category detail using API V2', async () => {
    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: contactCategoryListResponseFixture });

    const { wrapper } = createWrapper();
    const { result } = renderHook(() => useContactCategory('SUPPORT'), { wrapper });

    await waitFor(() => expect(result.current.data).toEqual(contactCategoryDetailFixture));

    expect(apiClient.POST).toHaveBeenCalledWith(
      '/api/rest/v2/generic/all/{entityName}',
      expect.objectContaining({
        params: { path: { entityName: 'ContactCategory' } },
        body: expect.objectContaining({ filters: { code: 'SUPPORT' } }),
      }),
    );
  });
});
