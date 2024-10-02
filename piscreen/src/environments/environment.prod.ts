import { Environment } from './environment.type';

export const environment: Environment = {
  production: true,
  host: '0.0.0.0',
  port: 4202,
  minOnDuration: 30000,
  sensorDevice: '/dev/gpiochip4',
  sensorPin: 23 /* GPIO number (not physical pin number), https://pinout.xyz/pinout/pin16_gpio23 */,
  sensorInterval: 100,
  mockSensor: false,
  //onCommand: 'xset dpms force on',
  //onCommand: 'sudo tvservice -p && sudo chvt 2 && sudo chvt 7',
  onCommand: 'wlr-randr --output HDMI-A-2 --on',
  //offCommand: 'xset dpms force off',
  //offCommand: 'sudo tvservice -o',
  offCommand: 'wlr-randr --output HDMI-A-2 --off',
};
