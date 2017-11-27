var http = require('http')
    , async = require('async'), fs = require('fs');

async.waterfall([
    function (cb) {
        fs.readFile(process.argv[2], cb);
    },
    function (url, cb) {
        var body = '';
        http.get(url.toString(), function (res) {
            res.on('data', function (chunk) {
                body += chunk.toString();
            });
            res.on('end', function () {
                cb(null, body);
            });
        }).on('error', function (err) {
            cb(err);
        });
    }
], function (err, result) {
    if (err) return console.error(err);
    console.log(result);
});

// had to handle error and response in different level if you use native http request, maybe a promise can be used here.
// function getPromise(url) {
//     return new Promise(function (fulfill, reject) {
//         // Your solution here
//         var body = '';
//         http.get(url.toString(), function (res) {
//             res.on('data', function (chunk) {
//                 body += chunk.toString();
//             });
//             res.on('end', function () {
//                 fulfill(body);
//             });
//         }).on('error', function (err) {
//             reject(err);
//         });
//     });
// }