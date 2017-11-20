var http = require('http');
var url = require('url');

var trace = require('jstrace');

http.createServer(function (req, res) { //'connection' listener
    trace('request:start', {url: req.url});
    var reqUrl = url.parse(req.url, true);
    var statusCode, body;
    if (reqUrl.pathname === '/prognosis' && req.method === 'GET') {
        statusCode = 200;
        body = {"ok": true};
    } else {
        statusCode = 404;
        body = {"error": "notfound"};
    }
    res.setHeader('content-type', 'application/json');
    res.writeHead(statusCode);
    res.end(JSON.stringify(body));
    trace('request:end', {statusCode: statusCode, body: body});
}).listen(9999, function () { //'listening' listener
    console.error('up');
});