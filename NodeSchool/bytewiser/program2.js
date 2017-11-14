// var buf = new Buffer(process.argv.length)
    var buf = process.argv.slice(2).map(Number);
console.log((new Buffer(buf)).toString('hex'));