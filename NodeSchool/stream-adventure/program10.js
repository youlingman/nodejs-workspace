var trumpet = require('trumpet');
var through = require('through2');
var tr = trumpet();

process.stdin.pipe(tr).pipe(process.stdout);
var loud = tr.select('.loud').createStream();
loud.pipe(through(function(buffer, _, next) {
	this.push(buffer.toString().toUpperCase());
	next();
})).pipe(loud);
