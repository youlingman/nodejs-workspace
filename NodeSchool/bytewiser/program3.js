process.stdin.on('data', function(chunk) {
    console.log(new Buffer(chunk.toString().replace(/\./g ,'!')));
});