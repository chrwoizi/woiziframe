const express = require('express');
const fs = require('fs');
const path = require('path');
const server = express();

const basePath = 'F:\\Bilder';
const extensions = ['.jpg', '.jpeg', '.png', '.tif', '.tiff'];

server.get('/albums', (req, res) => {
    const albums = fs.readdirSync(basePath).filter(x => fs.statSync(path.join(basePath, x)).isDirectory());
    res.send(JSON.stringify(albums))
});

server.get('/files', (req, res) => {
    function collectFiles(dir) {
        const dirs = fs.readdirSync(dir)
            .filter(x => fs.statSync(path.join(dir, x)).isDirectory());

        let files = fs.readdirSync(dir)
            .filter(x => !fs.statSync(path.join(dir, x)).isDirectory())
            .filter(x => extensions.indexOf(path.extname(x)?.toLowerCase()) !== -1)
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
server.listen(4201);
