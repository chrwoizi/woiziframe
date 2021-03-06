import { Environment } from './environment.type';

export const environment: Environment = {
  production: true,
  host: '0.0.0.0',
  port: 4202,
  minOnDuration: 30000,
  sensorPin: 16 /* raspberry board pin number (not GPIO number), https://pinout.xyz/pinout/pin32_gpio12 */,
  sensorInterval: 100,
  mockSensor: false,
  //onCommand: 'xset dpms force on',
  onCommand: 'sudo tvservice -p && sudo chvt 2 && sudo chvt 7',
  //offCommand: 'xset dpms force off',
  offCommand: 'sudo tvservice -o',
};
