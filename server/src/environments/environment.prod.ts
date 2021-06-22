import { secretEnvironment } from './environment.prod.secret';
import { sharedEnvironment } from './environment.shared';

export const environment = {
  ...sharedEnvironment,
  production: true,
  host: '0.0.0.0',
  port: 4201,
  basePath: secretEnvironment.basePath,
  whitelist: secretEnvironment.whitelist,
  blacklist: secretEnvironment.blacklist,
  googleCalendarClientId: secretEnvironment.googleCalendarClientId,
  googleCalendarClientSecret: secretEnvironment.googleCalendarClientSecret,
  openWeatherApiKey: secretEnvironment.openWeatherApiKey,
  garbageFormData: secretEnvironment.garbageFormData,
  mockWeather: false,
  mockCalendar: false,
  mockGarbage: false,
};
