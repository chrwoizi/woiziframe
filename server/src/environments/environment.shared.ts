import { CalendarEvent } from '../../../shared/CalendarEvent';

export const sharedEnvironment = {
  locationLatitude: 52.477093,
  locationLongitude: 10.090432,

  locale: 'de',
  timezone: 'Europe/Berlin',

  filterCalendarEvent: (event: CalendarEvent) =>
    /woiziframe\s*:\s*nein/.test(event.description?.toLowerCase()),
};
