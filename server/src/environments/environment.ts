// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { CalendarEvent } from '../../../shared/calendar/CalendarEvent';
import { Environment } from './environment.type';
import { keys } from './keys.secret';

export const environment: Environment = {
  production: false,
  host: '0.0.0.0',
  port: 4201,
  locationLatitude: 52.317915,
  locationLongitude: 9.998608,
  locale: 'de',
  timezone: 'Europe/Berlin',

  calendar: {
    mockCalendar: true,
    googleCalendarClientId: keys.calendar.googleCalendarClientId,
    googleCalendarClientSecret: keys.calendar.googleCalendarClientSecret,
    filterCalendarEvent: (event: CalendarEvent) =>
      !/woiziframe\s*:\s*nein/.test(event.description?.toLowerCase()),
    tokenFilePath: 'secrets/calendar.secret.json',
  },

  directions: {
    mockDirections: true,
    googleDirectionsApiKey: keys.directions.googleDirectionsApiKey,
    workDirections: [
      {
        name: 'Person A',
        origin: 'Bode-Ring 9, 31319 Sehnde',
        destination: 'Hildesheimer Str. 57, 38114 Braunschweig',
        mode: 'driving',
        weekdays: [1, 2, 3, 4, 5],
        fromHours: 6,
        toHours: 21,
      },
      {
        name: 'Person B',
        origin: 'Sehnde',
        destination: 'Anderter Str. 140, 30559 Hannover',
        mode: 'transit',
        weekdays: [1, 2, 3, 4, 5],
        fromHours: 6,
        toHours: 21,
      },
    ],
    getTrafficIfArrivalTimeIsInHours: 3,
  },

  garbage: {
    mockGarbage: false,
    garbageFormData: {
      aktion: 'Abfuhrtermine',
      gemeinde: 'Sehnde',
      von: 'B',
      bis: 'C',
      strasse: '75980@Bode-Ring / Rethmar@Rethmar',
      hausnr: '9',
      ladeort: '75980-0009',
    },
  },

  photo: {
    basePath: 'F:\\Bilder\\Bilderrahmen',
    whitelist: [],
    blacklist: [],
  },

  weather: {
    mockWeather: false,
    openWeatherApiKey: keys.weather.openWeatherApiKey,
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
