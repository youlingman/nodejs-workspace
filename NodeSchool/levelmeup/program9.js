var level = require('level');
// var fs = require('fs');

module.exports = function (databaseDir, jsonFile, callback) {
    var batch = level(databaseDir, { valueEncoding: 'json' }).batch();
    var entrys = require(jsonFile);
    entrys.map(function (entry) {
        if(entry.type === 'user') {
            batch = batch.put(entry.name, entry);
        } else if(entry.type === 'repo') {
            batch = batch.put(entry.user + '!' + entry.name, entry);
        }
    });
    batch.write(callback);
};