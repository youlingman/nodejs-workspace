var http = require('http')
    , async = require('async');

async.map(process.argv.slice(2), function (item, done) {
        http.get(item, function (res) {
            var body = '';
            res.on('data', function (chunk) {
                body += chunk.toString();
            });
            res.on('end', function () {
                done(null, body);
            });
        }).on('error', function (err) {
            done(err);
        });
    },
    function (err, results) {
        if (err) return console.log(err);
        console.log(results);
        // results is an array of the response bodies in the same order
    });