var feedCat = require(process.argv[2]);
var test = require('tape');

test('feedCat', function (t) {
    t.ok(feedCat('food') === 'yum');
    t.throws(feedCat.bind(null, 'chocolate'));
    t.end();
});
