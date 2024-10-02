import { Environment } from './environment.type';

export const environment: Environment = {
  production: false,
  host: '0.0.0.0',
  port: 4202,
  minOnDuration: 2000,
  sensorDevice: '/dev/gpiochip4',
  sensorPin: 23 /* GPIO number (not physical pin number), https://pinout.xyz/pinout/pin16_gpio23 */,
  sensorInterval: 100,
  mockSensor: true,
  mockSensorInterval: 30000,
  onCommand: 'echo mock on',
  offCommand: 'echo mock off',
};
