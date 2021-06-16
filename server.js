const express = require('express');
const fs = require('fs');
const path = require('path');
const server = express();

const basePath = 'F:\\Bilder';
const whitelist = ['2007 SEP', '2010-b Vatertag', '2011-09-17 Männerevent', '2013-07-20 Männerevent'];
const blacklist = [];
const extensions = ['.jpg', '.jpeg', '.png', '.tif', '.tiff'];

function findFiles(dir) {
    return fs.readdirSync(dir)
        .filter(x => !fs.statSync(path.join(dir, x)).isDirectory())
        .filter(x => extensions.indexOf(path.extname(x)?.toLowerCase()) !== -1);
}

server.get('/albums', (req, res) => {
    let albums = fs.readdirSync(basePath).filter(x => fs.statSync(path.join(basePath, x)).isDirectory());
    if (whitelist.length > 0) {
        albums = albums.filter(x => whitelist.indexOf(x) !== -1);
    }
    if (blacklist.length > 0) {
        albums = albums.filter(x => blacklist.indexOf(x) === -1);
    }
    res.send(JSON.stringify(albums))
});

server.get('/files', (req, res) => {
    function collectFiles(dir) {
        const dirs = fs.readdirSync(dir)
            .filter(x => fs.statSync(path.join(dir, x)).isDirectory());

        let files = findFiles(dir)
            .map(x => path.join(dir, x));

        for (const subdir of dirs) {
            files = files.concat(collectFiles(path.join(dir, subdir)));
        }
        return files;
    }
    const allFiles = collectFiles(path.join(basePath, req.query.album || ''));
    res.send(JSON.stringify(allFiles.map(x => x.substr(basePath.length + 1))));
});

server.use('/file', express.static(basePath));
server.listen(4201, '0.0.0.0');