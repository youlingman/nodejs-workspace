var through = require('through2')
var split = require('split')

var oddFlag = true
process.stdin.pipe(split())
	.pipe(through(function(buffer, encoding, next){
		if(oddFlag) {
			this.push(buffer.toString().toLowerCase() + "\n");
		} else {
			this.push(buffer.toString().toUpperCase() + "\n");
		}
		oddFlag = !oddFlag;
		next();
	})).pipe(process.stdout)
