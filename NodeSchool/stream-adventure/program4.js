var through = require('through2')

process.stdin.pipe(through(function(buffer, encoding, next){
	this.push(buffer.toString().toUpperCase());
	next();
})).pipe(process.stdout)
