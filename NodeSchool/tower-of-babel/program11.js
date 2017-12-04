var inputs = process.argv.slice(2);
var result = inputs.map((item) => item.slice(0, 1))
    .reduce((acc, current) => acc + current, "");
console.log(result);