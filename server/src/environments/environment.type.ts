import { CalendarEvent } from '../../../shared/calendar/CalendarEvent';
import { DirectionsQuery } from '../../../shared/directions/DirectionsQuery';

export interface Environment {
  production?: boolean;
  host?: string;
  port?: number;
  locationLatitude?: number;
  locationLongitude?: number;
  locale?: string;
  timezone?: string;

  calendar?: {
    mockCalendar?: boolean;
    filterCalendarEvent?: (event: CalendarEvent) => boolean;
    googleCalendarClientId?: string;
    googleCalendarClientSecret?: string;
    tokenFilePath?: string;
  };

  directions?: {
    mockDirections?: boolean;
    workDirections?: DirectionsQuery[];
    googleDirectionsApiKey?: string;
    getTrafficIfArrivalTimeIsInHours?: number;
  };

  garbage?: {
    mockGarbage?: boolean;
    garbageFormData?: {
      aktion: string;
      gemeinde: string;
      von: string;
      bis: string;
      strasse: string;
      hausnr: string;
      ladeort: string;
    };
  };

  photo?: {
    basePath?: string;
    whitelist?: string[];
    blacklist?: string[];
    whitelistFile?: string;
    blacklistFile?: string;
  };

  weather?: {
    mockWeather?: boolean;
    openWeatherApiKey?: string;
  };
}
