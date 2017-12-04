function* factorial(n) {
    // your code here
    var ans = 1;
    for(var i = 1; i <= n; i++) {
        yield ans *= i;
    }
}

for (var n of factorial(5)) {
    console.log(n)
}
// 1, 2, 6, 24, 120
