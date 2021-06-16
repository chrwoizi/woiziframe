import { secretEnvironment } from './environment.prod.secret';
import { sharedEnvironment } from './environment.shared';

export const environment = {
  ...sharedEnvironment,
  production: true,
  interval: 5000,
  mockWeather: false,
  basePath: secretEnvironment.basePath,
  whitelist: secretEnvironment.whitelist,
  blacklist: secretEnvironment.blacklist,
};
