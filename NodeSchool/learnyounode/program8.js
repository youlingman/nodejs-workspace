var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function(res){
	res.pipe(bl(function(err, data){
		var content = data.toString()
		console.log(content.length)
		console.log(content)
	}))
})
