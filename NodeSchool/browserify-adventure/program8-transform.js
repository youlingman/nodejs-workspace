var through = require('through2');
var sprintf = require('sprintf');
var quote = require('quote-stream');
var combiner = require('stream-combiner');

module.exports = function (file) {
    if (!/\.txt$/.test(file)) return through();
    var agg = "";
    var reducer = through(function(buf, enc, next) {
        agg += buf.toString();
        next();
    }, function (cb) {
        this.push(agg.split('\n').map(function (line, index) {
            if(index % 5 === 0) return sprintf('%3d %s', index, line);
            else return '    ' + line;
        }).join('\n'));
        cb();
    });
    var prefix = through();
    prefix.write('module.exports=');
    return combiner(reducer, quote(), prefix);
};