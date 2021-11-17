import * as express from 'express';
import { environment as devEnvironment } from './environments/environment';
import { environment as prodEnvironment } from './environments/environment.prod';
import { ScreenSwitch } from './ScreenSwitch';
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

server.get('/on', async (req, res) => {
  try {
    const stdout = await ScreenSwitch.on();
    res.json({ status: stdout });
  } catch (e) {
    res.json({ error: e.toString() });
  }
});

server.get('/off', async (req, res) => {
  try {
    const stdout = await ScreenSwitch.off();
    res.json({ status: stdout });
  } catch (e) {
    res.json({ error: e.toString() });
  }
});

console.log(
  'Server is running on ' + environment.host + ':' + environment.port
);

server.listen(environment.port, environment.host);
