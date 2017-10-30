var http = require('http');
var through = require('through2');

http.createServer(function(req, res) {
	if(req.method === 'POST') {
		req.pipe(through(function(buffer, encoding, next) {
			this.push(buffer.toString().toUpperCase());
			next();
		})).pipe(res);
	}
}).listen(process.argv[2]);
