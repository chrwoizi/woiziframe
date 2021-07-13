import { prodSecretEnvironment } from './environment.prod.secret';
import { Environment } from './environment.type';
import { keys } from './keys.secret';

export const environment: Environment = {
  production: true,
  host: '0.0.0.0',
  port: 4201,
  ...prodSecretEnvironment,

  calendar: {
    ...keys.calendar,
    ...prodSecretEnvironment.calendar,
  },

  directions: {
    ...keys.directions,
    ...prodSecretEnvironment.directions,
  },

  weather: {
    ...keys.weather,
    ...prodSecretEnvironment.weather,
  },
};
