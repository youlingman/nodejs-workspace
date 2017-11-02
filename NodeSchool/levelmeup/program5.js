var level = require('level');

module.exports = function (databaseDir, changes, callback) {
    var db = level(databaseDir);
    var batch = db.batch();
    // handle del
    for(var i = 0; i < changes.del.length; i++) {
        batch = batch.del(changes.del[i]);
    }
    // handle add
    for(var key in changes.put) {
        if(changes.put.hasOwnProperty(key))
            batch = batch.put(key, changes.put[key]);
    }
    batch.write(callback);
};