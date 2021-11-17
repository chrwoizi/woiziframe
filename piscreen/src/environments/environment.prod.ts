import { Environment } from './environment.type';

export const environment: Environment = {
  production: true,
  host: '0.0.0.0',
  port: 4202,
  minOnDuration: 10000,
  sensorPin: 12,
  sensorInterval: 100,
};
