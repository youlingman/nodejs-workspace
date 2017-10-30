var combine = require('stream-combiner');
var split = require('split');
var through = require('through2');
var zlib = require('zlib');
    
module.exports = function () {
	var holder = { name : "", books : [] };
	var reducer = through.obj(
		function(book, _, next) {
			if(book.type === 'book') {
				holder.books += book.name;
			} else if(book.type === 'genre') {
				this.push({name : holder.name, books : holder.books});
				holder.name = book.name;
				holder.books = [];
			}
			next();
		},
		function(done) {
			done();
		});
	return combine(split(), reducer, zlib.createGzip())
}
