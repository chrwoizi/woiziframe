import * as express from 'express';
import * as moment from 'moment-timezone';
import { WorkDirection } from '../../shared/directions/WorkDirection';
import {
  addAuthorizationCode,
  getAuthorizationUrl,
  loadCalendar,
} from './calendar';
import { loadDirections } from './directions';
import { environment as devEnvironment } from './environments/environment';
import { environment as prodEnvironment } from './environments/environment.prod';
import { loadGarbage } from './garbage';
import { loadWeather } from './weather';
const fs = require('fs');
const path = require('path');
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

const extensions = ['.jpg', '.jpeg', '.png', '.tif', '.tiff'];

function findFiles(dir: string) {
  return fs
    .readdirSync(dir)
    .filter((x: any) => !fs.statSync(path.join(dir, x)).isDirectory())
    .filter(
      (x: any) => extensions.indexOf(path.extname(x)?.toLowerCase()) !== -1
    );
}

server.get('/albums', (req, res) => {
  let albums = fs
    .readdirSync(environment.photo.basePath)
    .filter((x: any) =>
      fs.statSync(path.join(environment.photo.basePath, x)).isDirectory()
    );
  if (environment.photo.whitelist.length > 0) {
    albums = albums.filter(
      (x: any) => environment.photo.whitelist.indexOf(x) !== -1
    );
  }
  if (environment.photo.blacklist.length > 0) {
    albums = albums.filter(
      (x: any) => environment.photo.blacklist.indexOf(x) === -1
    );
  }
  res.json(albums);
});

server.get('/files', (req, res) => {
  function collectFiles(dir: string) {
    const dirs = fs
      .readdirSync(dir)
      .filter((x: any) => fs.statSync(path.join(dir, x)).isDirectory());

    let files = findFiles(dir).map((x: any) => path.join(dir, x));

    for (const subdir of dirs) {
      files = files.concat(collectFiles(path.join(dir, subdir)));
    }
    return files;
  }
  const allFiles = collectFiles(
    path.join(environment.photo.basePath, req.query.album || '')
  );
  res.json(
    allFiles.map((x: string) => x.substr(environment.photo.basePath.length + 1))
  );
});

server.use('/file', express.static(environment.photo.basePath));

server.get('/weather', async (req, res) => {
  try {
    res.json(await loadWeather());
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

server.get('/calendar', async (req, res) => {
  try {
    res.json(await loadCalendar());
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

server.get('/calendar/auth', async (req, res) => {
  try {
    res.json(await getAuthorizationUrl());
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

server.get('/calendar/confirm', async (req, res) => {
  try {
    await addAuthorizationCode(req.query.code as string);
    res.sendFile(path.join(__dirname, '..', 'res', 'calendar-confirmed.html'));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

server.get('/garbage', async (req, res) => {
  try {
    res.json(await loadGarbage());
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

server.get('/directions', async (req, res) => {
  try {
    const now = moment.tz(environment.timezone);

    const queries = environment.directions.workDirections.filter(
      (x) =>
        (!x.weekdays || x.weekdays.indexOf(now.weekday()) >= 0) &&
        (typeof x.fromHours === 'undefined' ||
          now.isSameOrAfter(
            moment.tz('Europe/Berlin').startOf('day').add(x.fromHours, 'hours')
          )) &&
        (typeof x.toHours === 'undefined' ||
          now.isSameOrBefore(
            moment.tz('Europe/Berlin').startOf('day').add(x.toHours, 'hours')
          ))
    );

    const response: WorkDirection[] = [];
    for (const query of queries) {
      const directions = await loadDirections(
        query.destination,
        query.origin,
        undefined,
        query.mode
      );
      response.push({
        query,
        directions,
      });
    }
    res.json(response);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

console.log('Server is running');

server.listen(environment.port, environment.host);
