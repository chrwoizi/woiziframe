// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import * as dotenv from 'dotenv';

if (process.env.NODE_ENV === 'production') {
  console.log('PROD');
  dotenv.config({ path: '.prod.env' });
  dotenv.config({ path: '.prod.secret.env' });
} else {
  console.log('DEV');
  dotenv.config({ path: '.dev.env' });
  dotenv.config({ path: '.dev.secret.env' });
}
dotenv.config({ path: '.env' });
dotenv.config({ path: '.secret.env' });

export { environment } from './environment.env';

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
