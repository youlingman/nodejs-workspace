let FizzBuzz = function* (max) {
    let iter = 1;
    while (iter <= max) {
        if (iter % 15 === 0) yield 'FizzBuzz';
        else if (iter % 5 === 0) yield 'Buzz';
        else if (iter % 3 === 0) yield 'Fizz';
        else yield iter;
        iter++;
    }
};

for (var n of FizzBuzz(process.argv[2])) {
    console.log(n);
}