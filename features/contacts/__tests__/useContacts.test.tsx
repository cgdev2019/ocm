import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { __internals, useContact, useContacts } from '@/features/contacts/api';
import { getApiClient, type ApiClient } from '@/lib/api/client';
import {
  contactDetailFixture,
  contactDtoFixture,
  contactFormValuesFixture,
  contactListItemFixture,
  contactListResponseFixture,
} from '@/tests/fixtures/opencellDataset';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

describe('contacts api', () => {
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
    expect(__internals.buildListRequest({ page: 3, pageSize: 25, search: ' Acme ' })).toEqual({
      limit: 25,
      offset: 75,
      genericFields: ['code', 'description', 'company', 'jobTitle'],
      sortBy: 'auditable.created',
      sortOrder: 'DESCENDING',
      filters: { code: 'acme', description: 'acme', company: 'acme' },
    });
  });

  it('maps DTO values to detail form values', () => {
    expect(__internals.mapDtoToDetail(contactDtoFixture)).toEqual(contactDetailFixture);
  });

  it('maps form values to DTO payload', () => {
    expect(__internals.mapFormToDto(contactFormValuesFixture)).toEqual({
      code: 'CT-001',
      description: 'CRM contact',
      company: 'Acme Corp',
      jobTitle: 'Account Manager',
      contactInformation: {
        email: 'crm@example.com',
        phone: '+33123456789',
        mobile: '+33698765432',
      },
      comment: 'Important contact',
    });
  });

  it('loads contact list using API V2 generic endpoint', async () => {
    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: contactListResponseFixture });

    const { wrapper } = createWrapper();
    const { result } = renderHook(() => useContacts({ page: 0, pageSize: 50, search: '' }), { wrapper });

    await waitFor(() => expect(result.current.data).toBeDefined());

    expect(apiClient.POST).toHaveBeenCalledWith(
      '/api/rest/v2/generic/all/{entityName}',
      expect.objectContaining({ params: { path: { entityName: 'Contact' } } }),
    );
    expect(result.current.data?.items).toEqual([contactListItemFixture]);
    expect(result.current.data?.paging.totalRecords).toBe(1);
  });

  it('loads a single contact detail using API V2 generic endpoint', async () => {
    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: contactListResponseFixture });

    const { wrapper } = createWrapper();
    const { result } = renderHook(() => useContact('CT-001'), { wrapper });

    await waitFor(() => expect(result.current.data).toEqual(contactDetailFixture));

    expect(apiClient.POST).toHaveBeenCalledWith(
      '/api/rest/v2/generic/all/{entityName}',
      expect.objectContaining({
        params: { path: { entityName: 'Contact' } },
        body: expect.objectContaining({ filters: { code: 'CT-001' } }),
      }),
    );
  });
});
