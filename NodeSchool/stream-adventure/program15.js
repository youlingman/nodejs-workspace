var crypto = require('crypto');
var zlib = require('zlib');
var tar = require('tar');
var through = require('through2');
var concat = require('concat-stream');
var parser = tar.Parse();

parser.on('entry', function (entry) {
    // console.dir(e);
	if(entry.type === 'File') {
		entry
            .pipe(crypto.createHash('md5', { encoding: 'hex' }))
            .pipe(concat(function(data) {
                console.log(data + ' ' + entry.path);
            }));
		    // through2 not fit here, may fire more than once for each entry.
            // .pipe(through(function(data, _, next) {
            //     this.push(data.toString() + ' ' + entry.path + '\n');
            //     next();
            // }))
            // .pipe(process.stdout);
	}
});

process.stdin
    .pipe(crypto.createDecipher(process.argv[2], process.argv[3]))
    .pipe(zlib.createGunzip())
    .pipe(parser);