let ndjson = require('../dist/browserify-adventure/program4-ndjson');

console.log(ndjson.parse(prompt("string input")));
console.log(ndjson.stringify(prompt("array input")));