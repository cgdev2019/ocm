import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react';
import { useContactMutations, __internals } from '@/features/contacts/api';
import { getApiClient, type ApiClient } from '@/lib/api/client';
import { contactFormValuesFixture } from '@/tests/fixtures/opencellDataset';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

describe('contact mutations', () => {
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

  it('creates a contact using API V2', async () => {
    const apiClient = { POST: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: { actionStatus: { status: 'SUCCESS' } } });

    const { wrapper, invalidateSpy } = createWrapper();
    const { result } = renderHook(() => useContactMutations(), { wrapper });

    await result.current.create.mutateAsync(contactFormValuesFixture);

    expect(apiClient.POST).toHaveBeenCalledWith('/api/rest/v2/contact', {
      body: __internals.mapFormToDto(contactFormValuesFixture),
    });
    expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['contacts'] });
    expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['contacts', 'detail', 'CT-001'] });
  });

  it('updates a contact using API V2', async () => {
    const apiClient = { PUT: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.PUT as jest.Mock).mockResolvedValue({ data: { actionStatus: { status: 'SUCCESS' } } });

    const { wrapper, invalidateSpy } = createWrapper();
    const { result } = renderHook(() => useContactMutations(), { wrapper });

    await result.current.update.mutateAsync(contactFormValuesFixture);

    expect(apiClient.PUT).toHaveBeenCalledWith('/api/rest/v2/contact', {
      body: __internals.mapFormToDto(contactFormValuesFixture),
    });
    expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['contacts'] });
    expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['contacts', 'detail', 'CT-001'] });
  });

  it('deletes a contact using API V2', async () => {
    const apiClient = { DELETE: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.DELETE as jest.Mock).mockResolvedValue({ data: { actionStatus: { status: 'SUCCESS' } } });

    const { wrapper, invalidateSpy } = createWrapper();
    const { result } = renderHook(() => useContactMutations(), { wrapper });

    await result.current.remove.mutateAsync(' CT-001 ');

    expect(apiClient.DELETE).toHaveBeenCalledWith('/api/rest/v2/contact/{code}', {
      params: { path: { code: 'CT-001' } },
    });
    expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['contacts'] });
    expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['contacts', 'detail', 'CT-001'] });
  });
});
