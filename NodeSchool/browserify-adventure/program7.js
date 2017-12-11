let fs = require('fs');
let sprintf = require('sprintf');
let text = fs.readFileSync('/home/cyl/project/nodejs-projects/NodeSchool/node_modules/browserify-adventure/problems/using_transforms/wake.txt', 'utf8');

text.split('\n').forEach(function (line, index) {
    if(index % 5 === 0) console.log(sprintf('%3d %s', index, line));
    else console.log('    ' + line);
});