var isCoolNumber = require(process.argv[2]);
var assert = require('assert');

assert(isCoolNumber(42) === true);
assert(isCoolNumber(1) === false);