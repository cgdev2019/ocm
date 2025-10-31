import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  CalendarDto,
  CalendarFormValues,
  CalendarListItem,
  GetCalendarResponse,
  ListCalendarResponse,
} from '@/features/calendars/types';

export const DEFAULT_CALENDARS_PAGE_SIZE = 20;

const adaptList = (items: CalendarDto[] | undefined): CalendarListItem[] =>
  (items ?? []).map((item) => ({
    code: item.code,
    description: item.description ?? undefined,
    calendarType: item.calendarType,
    periodLength: item.periodLength ?? undefined,
    periodUnit: item.periodUnit ?? undefined,
    startDate: item.startDate ?? undefined,
    endDate: item.endDate ?? undefined,
  }));

const mapDtoToForm = (dto: CalendarDto): CalendarFormValues => ({
  code: dto.code,
  description: dto.description ?? undefined,
  calendarType: dto.calendarType,
  periodLength: dto.periodLength ?? undefined,
  periodUnit: dto.periodUnit ?? undefined,
  nbPeriods: dto.nbPeriods ?? undefined,
  startDate: dto.startDate ?? undefined,
  endDate: dto.endDate ?? undefined,
  initDateEL: dto.initDateEL ?? undefined,
});

const mapFormToDto = (values: CalendarFormValues): CalendarDto => ({
  code: values.code,
  description: values.description,
  calendarType: values.calendarType,
  periodLength: values.periodLength,
  periodUnit: values.periodUnit,
  nbPeriods: values.nbPeriods,
  startDate: values.startDate,
  endDate: values.endDate,
  initDateEL: values.initDateEL,
  fixedDates: undefined,
  days: undefined,
  hours: undefined,
  intervals: undefined,
});

export const useCalendars = () =>
  useQuery({
    queryKey: queryKeys.calendars.list(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/calendar/list');
      const payload = unwrapResponse<ListCalendarResponse>(
        { data: result.data, error: result.error },
        'Unable to load calendars',
      );
      assertActionSuccess(payload.actionStatus, 'Calendars endpoint returned an error');
      return adaptList(payload.calendars?.calendar);
    },
  });

export const useCalendar = (code: string | null) =>
  useQuery({
    queryKey: queryKeys.calendars.detail(code ?? 'unknown'),
    enabled: Boolean(code),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/calendar', {
        params: { query: { calendarCode: code ?? '' } },
      });
      const payload = unwrapResponse<GetCalendarResponse>(
        { data: result.data, error: result.error },
        'Unable to load calendar',
      );
      assertActionSuccess(payload.actionStatus, 'Calendar retrieval failed');
      return payload.calendar ? mapDtoToForm(payload.calendar) : null;
    },
  });

export const useCalendarMutations = () => {
  const queryClient = useQueryClient();

  const create = useMutation({
    mutationFn: async (values: CalendarFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/calendar', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Calendar creation failed',
      );
      assertActionSuccess(payload, 'Calendar creation failed');
      return payload;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.calendars.list() });
      queryClient.invalidateQueries({ queryKey: queryKeys.calendars.detail(variables.code) });
    },
  });

  const upsert = useMutation({
    mutationFn: async (values: CalendarFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/calendar', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Calendar update failed',
      );
      assertActionSuccess(payload, 'Calendar update failed');
      return payload;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.calendars.list() });
      queryClient.invalidateQueries({ queryKey: queryKeys.calendars.detail(variables.code) });
    },
  });

  const remove = useMutation({
    mutationFn: async (code: string) => {
      const apiClient = getApiClient();
      const result = await apiClient.DELETE('/api/rest/calendar/{calendarCode}', {
        params: { path: { calendarCode: code } },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Calendar delete failed',
      );
      assertActionSuccess(payload, 'Calendar delete failed');
      return payload;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.calendars.list() });
    },
  });

  return useMemo(() => ({ create, upsert, remove }), [create, remove, upsert]);
};
