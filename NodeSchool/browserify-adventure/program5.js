let url = require('url');
let querystring = require('querystring');

let addr = url.parse(prompt("input addr"));

console.log(url.resolve(addr, querystring.parse(addr.query).file));