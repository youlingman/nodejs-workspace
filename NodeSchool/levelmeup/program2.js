var levelup = require('levelup');

module.exports = function (databaseDir, key, callback) {
    // your code...
    var db = levelup(databaseDir);
    db.get(key, function (error, value) {
        db.close(function(err) {
            callback(error || err, value);
        });
    });
};