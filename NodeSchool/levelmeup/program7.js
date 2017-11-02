var level = require('level');
var through = require('through2');

module.exports = function (databaseDir, date, callback) {
    var db = level(databaseDir);
    var count = 0;
    // your code...
    db.createReadStream({'gte': date})
        .pipe(through.obj(function (chunk, _, next) {
                count++;
                next();
            }, function (cb) {
                db.close(function(err) {
                    callback(err, count);
                });
                cb();
            })
        );
};