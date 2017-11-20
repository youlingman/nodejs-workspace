var bunyan = require("bunyan");
var log = bunyan.createLogger({name: "scenario"});
var resolve = require("path").resolve;

var scenario = require(resolve(process.cwd(), process.argv[2]));
scenario(log, function (value) {
    log.info("value at finish is", value);
});