var duplexer = require('duplexer2');
var through = require('through2');

module.exports = function(counter) {
	var counts = {};
	var counter_mapper = through.obj(
		function(chunk, enc, callback) {
			counts[chunk.country] = (counts[chunk.country] || 0) + 1;
			callback();
		}, 
		function(callback) {
			counter.setCounts(counts);
			callback();
	});
	return duplexer({objectMode : true}, counter_mapper, counter);
};
