var args = process.argv
var filterFile = require('./mymodule.js')

filterFile(args[2], args[3], function(err, list) {
	if(err) throw err;
	list.forEach(function(item) { console.log(item) })
})
