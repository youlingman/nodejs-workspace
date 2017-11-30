var http = require('http')
    , async = require('async');

var body = '', count = 1;
async.whilst(
    function () {
        return body.indexOf('meerkat') === -1;
    },
    function (callback) {
        // make get request
        http.get(process.argv[2], function (res) {
            body = '';
            res.on('data', function (chunk) {
                body += chunk.toString();
            });
            res.on('end', function () {
                callback(null, count++);
            });
        }).on('error', function (err) {
            callback(err);
        });
    },
    function (err, result) {
        // 5 seconds have passed, n = 5
        console.log(result);
    }
);