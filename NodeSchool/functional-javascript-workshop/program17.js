function curryN(fn, n) {
    // SOLUTION GOES HERE
    if (typeof n === 'undefined') return curryN(fn, fn.length);
    if (n <= 1) return function(arg) {
        return fn(arg);
    };
    else return function (arg) {
        return curryN(fn.bind(this, arg), n - 1);
    };
}

module.exports = curryN;
