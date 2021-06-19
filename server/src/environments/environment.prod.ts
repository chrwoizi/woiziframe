import { secretEnvironment } from './environment.prod.secret';
import { sharedEnvironment } from './environment.shared';

export const environment = {
  ...sharedEnvironment,
  production: true,
  basePath: secretEnvironment.basePath,
  whitelist: secretEnvironment.whitelist,
  blacklist: secretEnvironment.blacklist,
  googleCalendarClientId: secretEnvironment.googleCalendarClientId,
  googleCalendarClientSecret: secretEnvironment.googleCalendarClientSecret,
  openWeatherApiKey: secretEnvironment.openWeatherApiKey,
  mockWeather: false,
  mockCalendar: false,
};
