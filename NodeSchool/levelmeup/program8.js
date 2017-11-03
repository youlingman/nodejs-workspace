var level = require('level');
var through = require('through2');

module.exports = function (databaseDir, date, callback) {
    var db = level(databaseDir);
    var result = [];
    // your code...
    db.createReadStream({'gte': date, 'lte': date + '\xff'})
        .pipe(through.obj(function (chunk, _, next) {
                result.push(chunk.value);
                next();
            }, function (cb) {
                db.close(function (err) {
                    callback(err, result);
                });
                cb();
            })
        );
};