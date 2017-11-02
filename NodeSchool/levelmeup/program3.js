var level = require('level');

module.exports = function (databaseDir, callback) {
    var db = level(databaseDir);
    var result = [];
    // your code...
    function fetchNext(i) {
        db.get('key' + i, function(error, value) {
            // reach 100, or meet some error exclude notFound
            if(i >= 100 || (error && ! error.notFound)) return db.close(function(err) {
                callback(err, result);
            });
            if(!error) result.push(value);
            fetchNext(i + 1);
        });
    }
    // more code...
    fetchNext(0);
};