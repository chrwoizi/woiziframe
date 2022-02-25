import { Environment } from './environment.type';

export const environment: Environment = {
  production: false,
  host: '0.0.0.0',
  port: 4202,
  minOnDuration: 2000,
  sensorPin: 16 /* raspberry board pin number (not GPIO number), https://pinout.xyz/pinout/pin32_gpio12 */,
  sensorInterval: 100,
  mockSensor: true,
  mockSensorInterval: 30000,
  onCommand: 'echo mock on',
  offCommand: 'echo mock off',
};
