var http = require('http')
var map = require('through2-map')
var args = process.argv

http.createServer(function (req, res) {
	req.pipe(map(function (chunk){
		return chunk.toString().toUpperCase()
	})).pipe(res)
}).listen(args[2])
