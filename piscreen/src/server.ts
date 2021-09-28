import { exec } from 'child_process';
import * as express from 'express';
import { environment as devEnvironment } from './environments/environment';
import { environment as prodEnvironment } from './environments/environment.prod';
const server = express();
const bodyParser = require('body-parser');

server.use(bodyParser.json());

let environment = devEnvironment;
if (process.env.NODE_ENV === 'production') {
  for (let key of Object.getOwnPropertyNames(devEnvironment))
    delete devEnvironment[key];
  Object.assign(devEnvironment, prodEnvironment);

  environment = prodEnvironment;
  console.log('PROD');
}

function handleExecResult(
  res
): (
  error: import('child_process').ExecException,
  stdout: string,
  stderr: string
) => void {
  return (error, stdout, stderr) => {
    if (error) {
      res.json({ error: error.toString() });
    } else if (stderr) {
      res.json({ error: stderr });
    } else {
      res.json({ status: stdout });
    }
  };
}

server.get('/on', (req, res) => {
  exec('xset dpms force on', handleExecResult(res));
});

server.get('/off', (req, res) => {
  exec('xset dpms force off', handleExecResult(res));
});

console.log(
  'Server is running on ' + environment.host + ':' + environment.port
);

server.listen(environment.port, environment.host);
