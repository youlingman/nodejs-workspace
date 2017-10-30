var duplexer = require('duplexer2');
var spawn = require('child_process').spawn;

module.exports = function(cmd, args) {
	var cp = spawn(cmd, args);
	return duplexer(cp.stdin, cp.stdout);
};
