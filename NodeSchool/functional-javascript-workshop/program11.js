module.exports = function arrayMap(arr, fn) {
    // SOLUTION GOES HERE
    return arr.reduce(function (res, item) {
        res.push(fn(item));
        return res;
    }, [])
}
