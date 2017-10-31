var crypto = require('crypto');
var zlib = require('zlib');
var tar = require('tar');
var parser = tar.Parse();

parser.on('entry', function (entry) {
    // console.dir(e);
    crypto.createHash('md5', { encoding: 'hex' });
    entry.pipe();
});

process.stdin
    .pipe(crypto.createDecipher(process.argv[2], process.argv[3]))
    .pipe(zlib.createGunzip())
    .pipe(parser);
    // .pipe(process.stdout);