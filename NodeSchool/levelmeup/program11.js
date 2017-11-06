var level = require('level');
var sub = require('level-sublevel');

module.exports = function(databaseDir, callback) {
    var db = level(databaseDir);
    var subdb = sub(db);
    subdb.sublevel('robots').put("slogan", "beep boop");
    subdb.sublevel('dinosaurs').put("slogan", "rawr");
    db.close(function(err) {
       callback(err);
    });
};