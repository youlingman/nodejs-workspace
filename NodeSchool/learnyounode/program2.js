//console.log(process.argv)
var sum = 0
var ars = process.argv
for (var i = 2; i < ars.length; i++) {
	sum += Number(ars[i])
}
console.log(sum)
