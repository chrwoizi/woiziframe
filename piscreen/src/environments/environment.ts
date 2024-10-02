import { environment as devEnvironment } from './environment.dev';
import { environment as prodEnvironment } from './environment.prod';

let e = devEnvironment;
if (process.env.NODE_ENV === 'production') {
  e = prodEnvironment;
}

export const environment = e;
