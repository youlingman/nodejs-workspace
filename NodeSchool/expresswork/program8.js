var express = require('express');
var app = express();
var fs = require('fs');

app.get('/books', function(req, res){
    fs.readFile(process.argv[3], function (err, chunk) {
        if(err) console.error(err);
        res.json(JSON.parse(chunk.toString()));
    });
});

app.listen(process.argv[2]);