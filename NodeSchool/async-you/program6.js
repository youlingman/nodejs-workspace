var http = require('http')
    , async = require('async');

var url = process.argv[2];

async.reduce(['one', 'two', 'three'], 0, function(acc, item, callback) {
    // make get request
    http.get(url + '?number=' + item, function (res) {
        var body = '';
        res.on('data', function (chunk) {
            body += chunk.toString();
        });
        res.on('end', function () {
            callback(null, acc + Number(body));
        });
    }).on('error', function (err) {
        callback(err);
    });
}, function(err, result) {
    // result is now equal to the last value of memo, which is 6
    if(err) console.error(err);
    console.log(result);
});