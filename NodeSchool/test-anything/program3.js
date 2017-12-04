var fancify = require(process.argv[2]);
var test = require('tape');

test('isCoolNumber accepts only cool numbers', function (t) {
    t.ok(fancify('Hello') === '~*~Hello~*~');
    t.ok(fancify('Hello', true) === '~*~HELLO~*~');
    t.ok(fancify('Hello', false, '!') === '~!~Hello~!~');
    t.ok(fancify('Hello', true, '!') === '~!~HELLO~!~');
    t.end();
});