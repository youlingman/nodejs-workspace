var level = require('level');
var through = require('through2');

module.exports = function (databaseDir) {
    var db = level(databaseDir);
    var resultStream = db.createReadStream()
        .pipe(through.obj(function(chunk, _, next) {
            this.push(chunk.key + '=' + chunk.value);
            next();
            }, function(callback) {
                db.close(callback);
            })
        );
    // your code...
    return resultStream;
};