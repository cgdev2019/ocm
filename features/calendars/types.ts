import type { components } from '@/lib/api/generated/schema';

export type CalendarDto = components['schemas']['CalendarDto'];
export type GetCalendarResponse = components['schemas']['GetCalendarResponse'];
export type ListCalendarResponse = components['schemas']['ListCalendarResponse'];

export type CalendarListItem = {
  code: string;
  description?: string;
  calendarType: CalendarDto['calendarType'];
  periodLength?: number;
  periodUnit?: CalendarDto['periodUnit'];
  startDate?: string;
  endDate?: string;
};

export type CalendarFormValues = {
  code: string;
  description?: string;
  calendarType: CalendarDto['calendarType'];
  periodLength?: number;
  periodUnit?: CalendarDto['periodUnit'];
  nbPeriods?: number;
  startDate?: string;
  endDate?: string;
  initDateEL?: string;
};
