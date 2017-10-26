var http = require('http')
var fs = require('fs')
var args = process.argv

http.createServer(function (req, res) {
	fs.createReadStream(args[3]).pipe(res)
}).listen(args[2])
