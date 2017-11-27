var http = require('http')
    , async = require('async');

var requestPostOption = {
    hostname:
        process.argv[2],
    port:
        Number(process.argv[3]),
    path:
        '/users/create',
    method:
        'POST'
};

var requestGetOption = {
    hostname:
        process.argv[2],
    port:
        Number(process.argv[3]),
    path:
        '/users',
    method:
        'GET'
};


async.series({
        timePost: function (cb) {
            async.times(5, function (id, next) {
                http.request(requestPostOption, function (res) {
                    res.on('data', function (chunk) {
                    });
                    res.on('end', function () {
                        next();
                    });
                }).on('error', function (err) {
                        next(err);
                }).end(JSON.stringify({"user_id": id + 1}));
            }, function (err) {
                cb(err);
            });
        },
        getAns: function (cb) {
            var body = '';
            http.request(requestGetOption).on('response', function (res) {
                var body = '';
                res.on('data', function (chunk) {
                    body += chunk.toString();
                });

                res.on('end', function () {
                    console.error(body);
                    cb(null, body);
                });
            }).on('error', function (err) {
                cb(err);
            }).end();
        }
    },
    function (err, results) {
        if (err) console.error(err);
        console.log(results.getAns);
        // results will be {one: 1, two: 2}
    }
);