import { sharedEnvironment } from './environment.shared';

export const environment = {
  ...sharedEnvironment,
  production: true,
  interval: 30000,
  screenStatusInterval: 5000,
  screenStatusUrl: 'http://localhost:4202/status',
};
