module.exports = function (dir, ext, callback) {
	var fs = require('fs')
	var path = require('path')
	fs.readdir(dir, function(err, list) {
		if(err) return callback(err)
		callback(null, list.filter(function(item){ return path.extname(item).substr(1) === ext }) )
	})
}
