module.exports = scenario;

function scenario(callback) {
    var createServer = require("http").createServer;

    var server = createServer(function (req, res) {
        res.end("hello");
    }).listen(8080);
    var replify = require("replify");
    var replpad = require("replpad");
    server.__message = "REPLs are neat";
    var repl = replify({name: 'bug-clinic', start : replpad}, server);
    callback(server, repl);
};
