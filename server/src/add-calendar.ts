import { exec } from 'child_process';
import * as request from 'request';
import { environment } from './environments/environment';

const redirect = `http://${
  environment.host === '0.0.0.0' || environment.host === '127.0.0.1'
    ? 'localhost'
    : environment.host
}:${environment.port}/calendar/confirm`;

const url = `http://${environment.host}:${
  environment.port
}/calendar/auth?redirect=${encodeURIComponent(redirect)}`;
console.log(url);

request(url, {}, (err, response) => {
  if (err) {
    console.log(err);
    process.exit(-1);
  }
  const authUrl = JSON.parse(response.body) as string;
  console.log(authUrl);
  exec(`start chrome "${authUrl}"`);
});
