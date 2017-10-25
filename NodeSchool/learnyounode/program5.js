var fs = require('fs')
var path = require('path')
var args = process.argv
fs.readdir(args[2], function(err, list) {
	if(err) throw err;
	list.filter(function(item){ return path.extname(item).substr(1) === args[3] }).forEach(function(item) { console.log(item) })
	//list.forEach(function(item) { console.log(path.extname(item).substr(1)) })
})
