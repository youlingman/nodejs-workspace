var repeatCallback = require(process.argv[2]);
var test = require('tape')

test('repeatCallback 4 time', function (t) {
    t.plan(4);
    repeatCallback(4, function () {
        t.pass('callback 4 time');
    });
});

test('repeatCallback once', function (t) {
    t.plan(1);
    repeatCallback(1, function () {
        t.pass('callback 1 time');
    });
});