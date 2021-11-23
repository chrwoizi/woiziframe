// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from './environment.type';

export const environment: Environment = {
  production: false,
  host: '0.0.0.0',
  port: 4202,
  minOnDuration: 30000,
  sensorPin: 16 /* raspberry board pin number (not GPIO number), https://pinout.xyz/pinout/pin32_gpio12 */,
  sensorInterval: 100,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
