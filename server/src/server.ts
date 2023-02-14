import * as express from 'express';
import * as moment from 'moment-timezone';
import { WorkDirection } from '../../shared/directions/WorkDirection';
import {
  addAuthorizationCode,
  getAuthorizationUrl,
  loadCalendar,
} from './calendar';
import { loadDirections } from './directions';
import { environment } from './environments/environment';
import { loadGarbage } from './garbage';
import { loadWeather } from './weather';
import * as fs from 'fs';
import * as path from 'path';
const server = express();
import * as bodyParser from 'body-parser';

server.use(bodyParser.json());

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
  if (environment.photo.whitelist?.length > 0) {
    albums = albums.filter(
      (x: any) => environment.photo.whitelist.indexOf(x) !== -1
    );
  }
  if (environment.photo.blacklist?.length > 0) {
    albums = albums.filter(
      (x: any) => environment.photo.blacklist.indexOf(x) === -1
    );
  }
  if (environment.photo.whitelistFile) {
    albums = albums.filter((x) =>
      fs.existsSync(
        path.join(
          environment.photo.basePath,
          x,
          environment.photo.whitelistFile
        )
      )
    );
  }
  if (environment.photo.blacklistFile) {
    albums = albums.filter(
      (x) =>
        !fs.existsSync(
          path.join(
            environment.photo.basePath,
            x,
            environment.photo.blacklistFile
          )
        )
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

  if (typeof req.query.album !== 'string') {
    res.json([]);
    return;
  }

  if (environment.photo.whitelist?.length > 0) {
    if (environment.photo.whitelist.indexOf(req.query.album) === -1) {
      res.json([]);
      return;
    }
  }

  if (environment.photo.blacklist?.length > 0) {
    if (environment.photo.blacklist.indexOf(req.query.album) !== -1) {
      res.json([]);
      return;
    }
  }

  if (environment.photo.whitelistFile) {
    if (
      !fs.existsSync(
        path.join(
          environment.photo.basePath,
          req.query.album,
          environment.photo.whitelistFile
        )
      )
    ) {
      res.json([]);
      return;
    }
  }

  if (environment.photo.blacklistFile) {
    if (
      fs.existsSync(
        path.join(
          environment.photo.basePath,
          req.query.album,
          environment.photo.blacklistFile
        )
      )
    ) {
      res.json([]);
      return;
    }
  }

  const allFiles = collectFiles(
    path.join(environment.photo.basePath, req.query.album || '')
  );
  res.json(
    allFiles.map((x: string) => x.substr(environment.photo.basePath.length + 1))
  );
});

server.use('/file', async (req, res, next) => {
  console.log(decodeURI(req.path));

  const split = decodeURI(req.path).split('/');
  if (split.length < 2) {
    res.json([]);
    return;
  }

  const album = split[1];

  if (environment.photo.whitelist?.length > 0) {
    if (environment.photo.whitelist.indexOf(album) === -1) {
      res.json([]);
      return;
    }
  }

  if (environment.photo.blacklist?.length > 0) {
    if (environment.photo.blacklist.indexOf(album) !== -1) {
      res.json([]);
      return;
    }
  }

  if (environment.photo.whitelistFile) {
    if (
      !fs.existsSync(
        path.join(
          environment.photo.basePath,
          album,
          environment.photo.whitelistFile
        )
      )
    ) {
      res.json([]);
      return;
    }
  }

  if (environment.photo.blacklistFile) {
    if (
      fs.existsSync(
        path.join(
          environment.photo.basePath,
          album,
          environment.photo.blacklistFile
        )
      )
    ) {
      res.json([]);
      return;
    }
  }

  return express.static(environment.photo.basePath)(req, res, next);
});

server.get('/weather', async (req, res) => {
  if (!environment.weather?.enabled) return res.sendStatus(404);
  try {
    res.json(await loadWeather());
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

server.get('/calendar', async (req, res) => {
  if (!environment.calendar?.enabled) return res.sendStatus(404);
  try {
    res.json(await loadCalendar());
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

server.get('/calendar/auth', async (req, res) => {
  try {
    res.json(await getAuthorizationUrl(req.query.redirect as string));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

server.get('/calendar/confirm', async (req, res) => {
  try {
    if (!req.query.code) throw new Error('code param is missing');
    if (!req.query.state) throw new Error('state param is missing');
    await addAuthorizationCode(
      req.query.code as string,
      req.query.state as string
    );
    res.sendFile(path.join(__dirname, '..', 'res', 'calendar-confirmed.html'));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

server.get('/garbage', async (req, res) => {
  if (!environment.garbage?.enabled) return res.sendStatus(404);
  try {
    res.json(await loadGarbage());
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

server.get('/directions', async (req, res) => {
  if (!environment.directions?.enabled) return res.sendStatus(404);
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

console.log(
  'Server is running on ' + environment.host + ':' + environment.port
);

server.listen(environment.port, environment.host);
