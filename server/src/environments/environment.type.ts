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
    enabled: boolean;
    mockCalendar?: boolean;
    filterCalendarEvent?: (event: CalendarEvent) => boolean;
    googleCalendarClientId?: string;
    googleCalendarClientSecret?: string;
    tokenFilePath?: string;
  };

  directions?: {
    enabled: boolean;
    mockDirections?: boolean;
    workDirections?: DirectionsQuery[];
    googleDirectionsApiKey?: string;
    getTrafficIfArrivalTimeIsInHours?: number;
  };

  garbage?: {
    enabled: boolean;
    mockGarbage?: boolean;
    garbageQueryString?: {
      gemeinde: string;
      von: string;
      bis: string;
    };
    garbageFormData?: {
      gemeinde: string;
      jsaus: string;
      strasse: string;
      hausnr: string;
      hausnraddon: string;
      anzeigen: string;
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
    enabled: boolean;
    mockWeather?: boolean;
    openWeatherApiKey?: string;
  };
}
