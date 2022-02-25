import { environment as devEnvironment } from './environment.dev';
import { environment as prodEnvironment } from './environment.prod';

let e = devEnvironment;
if (process.env.NODE_ENV === 'production') {
  for (let key of Object.getOwnPropertyNames(devEnvironment))
    delete devEnvironment[key];
  Object.assign(devEnvironment, prodEnvironment);

  e = prodEnvironment;
  console.log('PROD');
}

export const environment = e;
