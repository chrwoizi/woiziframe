const express = require('express');
const fs = require('fs');
const path = require('path');
const server = express();

import { environment as prodEnvironment } from './environments/environment.prod';
import { environment as devEnvironment } from './environments/environment';

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

server.get('/albums', (req: any, res: { send: (arg0: string) => void }) => {
  let albums = fs
    .readdirSync(basePath)
    .filter((x: any) => fs.statSync(path.join(basePath, x)).isDirectory());
  if (whitelist.length > 0) {
    albums = albums.filter((x: any) => whitelist.indexOf(x) !== -1);
  }
  if (blacklist.length > 0) {
    albums = albums.filter((x: any) => blacklist.indexOf(x) === -1);
  }
  res.send(JSON.stringify(albums));
});

server.get(
  '/files',
  (req: { query: { album: any } }, res: { send: (arg0: string) => void }) => {
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
    res.send(
      JSON.stringify(allFiles.map((x: string) => x.substr(basePath.length + 1)))
    );
  }
);

server.use('/file', express.static(basePath));
server.listen(4201, '0.0.0.0');
