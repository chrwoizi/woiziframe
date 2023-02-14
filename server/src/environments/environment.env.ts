import { CalendarEvent } from '../../../shared/calendar/CalendarEvent';
import { Environment } from './environment.type';

if (
  process.env.CALENDAR_ENABLED === 'true' &&
  process.env.CALENDAR_MOCK !== 'true' &&
  !process.env.GOOGLE_CALENDAR_CLIENT_ID
) {
  console.error('Missing environment variable GOOGLE_CALENDAR_CLIENT_ID');
  process.exit(1);
}

if (
  process.env.CALENDAR_ENABLED === 'true' &&
  process.env.CALENDAR_MOCK !== 'true' &&
  !process.env.GOOGLE_CALENDAR_CLIENT_SECRET
) {
  console.error('Missing environment variable GOOGLE_CALENDAR_CLIENT_SECRET');
  process.exit(1);
}

if (
  process.env.DIRECTIONS_ENABLED === 'true' &&
  process.env.DIRECTIONS_MOCK !== 'true' &&
  !process.env.GOOGLE_DIRECTIONS_API_KEY
) {
  console.error('Missing environment variable GOOGLE_DIRECTIONS_API_KEY');
  process.exit(1);
}

if (
  process.env.WEATHER_ENABLED === 'true' &&
  process.env.WEATHER_MOCK !== 'true' &&
  !process.env.OPEN_WEATHER_API_KEY
) {
  console.error('Missing environment variable OPEN_WEATHER_API_KEY');
  process.exit(1);
}

export const environment: Environment = {
  production: process.env.NODE_ENV === 'production',
  host: process.env.HOST ?? '0.0.0.0',
  port: process.env.PORT ? parseInt(process.env.PORT) : 4201,
  locationLatitude: parseFloat(process.env.LOCATION_LATITUDE),
  locationLongitude: parseFloat(process.env.LOCATION_LONGITUDE),
  locale: process.env.LOCALE ?? 'de',
  timezone: process.env.TIMEZONE ?? 'Europe/Berlin',

  photo: {
    basePath: process.env.PHOTO_BASE_PATH ?? 'pictures',
    blacklistFile:
      !process.env.PHOTO_BLACKLIST || process.env.PHOTO_BLACKLIST === 'true'
        ? '.woiziframe-ignore'
        : undefined,
    whitelistFile:
      process.env.PHOTO_WHITELIST === 'true'
        ? '.woiziframe-include'
        : undefined,
  },

  calendar: {
    enabled: process.env.CALENDAR_ENABLED === 'true',
    mockCalendar: process.env.CALENDAR_MOCK === 'true',
    googleCalendarClientId: process.env.GOOGLE_CALENDAR_CLIENT_ID,
    googleCalendarClientSecret: process.env.GOOGLE_CALENDAR_CLIENT_SECRET,
    filterCalendarEvent: (event: CalendarEvent) =>
      !/woiziframe\s*:\s*nein/.test(event.description?.toLowerCase()),
    tokenFilePath: 'secrets/calendar.secret.json',
  },

  directions: {
    enabled:
      !process.env.DIRECTIONS_ENABLED ||
      process.env.DIRECTIONS_ENABLED === 'true',
    mockDirections:
      !process.env.DIRECTIONS_MOCK || process.env.DIRECTIONS_MOCK === 'true',
    googleDirectionsApiKey: process.env.GOOGLE_DIRECTIONS_API_KEY,
    workDirections: getWorkDirections(),
    getTrafficIfArrivalTimeIsInHours: 3,
  },

  garbage: {
    enabled:
      !process.env.GARBAGE_ENABLED || process.env.GARBAGE_ENABLED === 'true',
    mockGarbage:
      !process.env.DIRECTIONS_MOCK || process.env.GARBAGE_MOCK === 'true',
    garbageFormData: {
      aktion: 'Abfuhrtermine',
      gemeinde: process.env.GARBAGE_MUNICIPALITY,
      von: process.env.GARBAGE_STREET_LETTER,
      bis: String.fromCharCode(
        process.env.GARBAGE_STREET_LETTER.charCodeAt(0) + 1
      ),
      strasse: process.env.GARBAGE_STREET_CODE,
      hausnr: process.env.GARBAGE_HOUSE_NUMBER,
      ladeort: process.env.GARBAGE_PICKUP_LOCATION_CODE,
    },
  },

  weather: {
    enabled:
      !process.env.WEATHER_ENABLED || process.env.WEATHER_ENABLED === 'true',
    mockWeather:
      !process.env.WEATHER_MOCK || process.env.WEATHER_MOCK === 'true',
    openWeatherApiKey: process.env.OPEN_WEATHER_API_KEY,
  },
};

function getWorkDirections() {
  const workDirections = [];
  while (process.env[`DIRECTIONS_PERSON_${workDirections.length}_NAME`]) {
    const prefix = `DIRECTIONS_PERSON_${workDirections.length}`;
    workDirections.push({
      name: process.env[`${prefix}_NAME`],
      origin: process.env[`${prefix}_ORIGIN`],
      destination: process.env[`${prefix}_DESTINATION`],
      mode: process.env[`${prefix}_MODE`] ?? 'driving',
      weekdays: process.env[`${prefix}_WEEKDAYS`]
        ? JSON.parse(process.env[`${prefix}_WEEKDAYS`])
        : [1, 2, 3, 4, 5],
      fromHours: parseInt(process.env[`${prefix}_FROM_HOURS`] ?? '6'),
      toHours: parseInt(process.env[`${prefix}_TO_HOURS`] ?? '21'),
    });
  }
  return workDirections;
}
