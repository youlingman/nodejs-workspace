var combine = require('stream-combiner');
var split = require('split');
var through = require('through2');
var zlib = require('zlib');
    
module.exports = function () {
	var holder = { name : "", books : [] };
	var reducer = through(
		function(chunk, _, next) {
			var book = JSON.parse(chunk);

			if(row.type === 'genre') {
				if(holder.name !== "")
					this.push(JSON.stringify(holder) + "\n");
				holder.name = book.name;
				holder.books = [];
			} else if(row.type === 'book') {
				holder.books.push(book.name);
			}
			next();
		},
		function(done) {
			if(holder.name !== "")
				this.push(JSON.stringify(holder) + "\n");
			done();
		});
	return combine(split(), reducer, zlib.createGzip());
};
