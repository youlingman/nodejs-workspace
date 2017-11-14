var fs = require('fs');
var newLine = '\n'.charCodeAt(0);

fs.readFile(process.argv[2], function (err, data) {
    if (err) throw err;
    for(var i = 0, pre = 0; i < data.length; i++) {
        // meet newline or file-end
        if(newLine === data[i] || i === data.length - 1) {
            console.log(data.slice(pre, i));
            pre = i + 1;
        }
    }
});