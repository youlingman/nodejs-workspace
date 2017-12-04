const max = process.argv[2];
let FizzBuzz = {
    [Symbol.iterator]() {
        // here belongs the FizzBuzz logic
        // Hint：
        // When it's finished you have to return an object
        // with the property `done: true` but before you
        // have to set `done: false`
        let cur = 0;
        return {
            next() {
                cur++;
                if (cur > max) return {done: true};
                if (cur % 15 === 0) return {done: false, value: 'FizzBuzz'};
                if (cur % 5 === 0) return {done: false, value: 'Buzz'};
                if (cur % 3 === 0) return {done: false, value: 'Fizz'};
                return {done: false, value: cur};
            }
        }
    }
};

for (var n of FizzBuzz) {
    console.log(n);
}