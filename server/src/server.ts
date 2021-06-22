import * as express from 'express';
import {
  addAuthorizationCode,
  getAuthorizationUrl,
  loadCalendar,
} from './calendar';
import { environment as devEnvironment } from './environments/environment';
import { environment as prodEnvironment } from './environments/environment.prod';
import { loadGarbage } from './garbage';
import { loadWeather } from './weather';
const fs = require('fs');
const path = require('path');
const server = express();
const bodyParser = require('body-parser');

server.use(bodyParser.json());

let environment;
if (process.env.NODE_ENV === 'production') {
  environment = prodEnvironment;
} else {
  environment = devEnvironment;
}

const basePath = environment.basePath;
const whitelist = environment.whitelist;
const blacklist = environment.blacklist;
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
    .readdirSync(basePath)
    .filter((x: any) => fs.statSync(path.join(basePath, x)).isDirectory());
  if (whitelist.length > 0) {
    albums = albums.filter((x: any) => whitelist.indexOf(x) !== -1);
  }
  if (blacklist.length > 0) {
    albums = albums.filter((x: any) => blacklist.indexOf(x) === -1);
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
  const allFiles = collectFiles(path.join(basePath, req.query.album || ''));
  res.json(allFiles.map((x: string) => x.substr(basePath.length + 1)));
});

server.use('/file', express.static(basePath));

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

console.log('Server is running');

server.listen(environment.port, environment.host);
