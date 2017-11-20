require('stackup');
var readFile = require("fs").readFile;
var domain = require("domain");

module.exports = scenario;

function scenario(jsonPath, cb) {
    var d = domain.create();
    // can't pass the verify, not sure why the 'JSON.parse' method invoking shows 'Object.parse' in th error stack.
    d.on('error', function(error) {
        // console.log(error.stack);
        cb(error);
    });
    d.run(function() {
        readFile(jsonPath, {encoding : "utf8"}, function (error, contents) {
            cb(error, JSON.parse(contents));
        });
    });
}