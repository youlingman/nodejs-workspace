var http = require('http')
var url = require('url')
var args = process.argv

http.createServer(function (req, res) {
	var reqUrl = url.parse(req.url, true)
	res.writeHead(200, { 'Content-Type': 'application/json' })
	var date = new Date(reqUrl.query.iso)
	if(reqUrl.pathname === "/api/parsetime") {
		res.end(JSON.stringify({
			"hour" : date.getHours(),
			"minute" : date.getMinutes(),
			"second" : date.getSeconds(),
		}))
	} else if(reqUrl.pathname === "/api/unixtime") {
		res.end(JSON.stringify({"unixtime" : date.getTime()}))
	}
}).listen(args[2])
