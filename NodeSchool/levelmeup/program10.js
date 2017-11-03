var through = require('through2');

module.exports.init = function (db, words, callback) {
    // insert each word in the words array here
    // then call `callback()` when you are done inserting words
    var batch = db.batch();
    words.map(function (word) {
        batch = batch.put(genKey(word), word);
    });
    batch.write(callback);
};

module.exports.query = function (db, word, callback) {
    // `word` may have '*' chars to denote single-letter wildcards
    // call callback(err, results) with an array of matching words
    var result = [];
    db.createReadStream({gte: genKey(word).replace(/\*/g, ''), lte: genKey(word).replace(/\*/g, '\xff')})
        .pipe(through.obj(function (entry, _, next) {
            result.push(entry.value);
            next();
        }, function (cb) {
            callback(null, result);
            cb();
        }));
};

function genKey(word) {
    return word.length + '!' + word;
}