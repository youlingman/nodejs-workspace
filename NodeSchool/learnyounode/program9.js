var http = require('http')
var bl = require('bl')

const contentNum = 3
var args = process.argv
var contents = []
var count = 0

function printContent() {
	for(var i = 0; i < contentNum; i++) console.log(contents[i])
}

function fetchContent(n) {
	http.get(process.argv[2+n], function(res){
		res.pipe(bl(function(err, data){
			contents[n] = data.toString()
			count++
			if(count === contentNum) printContent()
		}))
	})
}

for(var i = 0; i < contentNum; i++) fetchContent(i)