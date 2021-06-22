import { exec } from 'child_process';
import * as request from 'request';
import { environment } from './environments/environment.prod';

request(
  `http://${environment.host}:${environment.port}/calendar/auth`,
  {},
  (err, response) => {
    if (err) {
      console.log(err);
      process.exit(-1);
    }
    const authUrl = JSON.parse(response.body) as string;
    console.log(authUrl);
    exec('start chrome "' + authUrl + '"');
  }
);
