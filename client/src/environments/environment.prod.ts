import { sharedEnvironment } from './environment.shared';

export const environment = {
  ...sharedEnvironment,
  production: true,
  interval: 5000,
  mockWeather: false,
};