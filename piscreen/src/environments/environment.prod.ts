import { Environment } from './environment.type';

export const environment: Environment = {
  production: true,
  host: '0.0.0.0',
  port: 4202,
  minOnDuration: 10000,
  sensorPin: 16 /* raspberry pin number (not GPIO number) */,
  sensorInterval: 100,
};
