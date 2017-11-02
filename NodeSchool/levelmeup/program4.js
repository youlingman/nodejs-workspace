var level = require('level');

module.exports = function (databaseDir, obj, callback) {
    var db = level(databaseDir);
    for(var key in obj) {
        db.put(key, obj[key], function(err) {
            if(err) return db.close(function(error) {
                callback(err || error);
            });
        });
    }
    db.close(function(error) {
        callback(error);
    });
};