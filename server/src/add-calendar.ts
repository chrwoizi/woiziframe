import { exec } from 'child_process';
import * as request from 'request';

request('http://localhost:4201/calendar/auth', {}, (err, response) => {
  if (err) {
    console.log(err);
    process.exit(-1);
  }
  const authUrl = JSON.parse(response.body) as string;
  console.log(authUrl);
  exec('start chrome "' + authUrl + '"');
});
