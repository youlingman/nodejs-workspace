function duckCount() {
    // SOLUTION GOES HERE
    return Array.prototype.slice.call(arguments).reduce(function (count, obj) {
        return count + (Object.prototype.hasOwnProperty.call(obj, 'quack'));
    }, 0);
}

module.exports = duckCount