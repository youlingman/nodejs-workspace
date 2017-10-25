var args = process.argv
var dislayDir = require('/home/cyl/project/nodejs-projects/NodeSchool/learnyounode/mymodule.js')
displayDir(args[2], args[3], function(err, list) {
	if(err) throw err;
	list.forEach(function(item) { console.log(item) })
})
