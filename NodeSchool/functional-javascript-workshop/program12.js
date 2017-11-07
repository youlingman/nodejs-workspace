function Spy(target, method) {
    // SOLUTION GOES HERE
    var prevMethod = target[method];
    var result = {
        count: 0
    };
    target[method] = function () {
        result.count++;
        return prevMethod.apply(this, arguments);
    };
    return result;
}

module.exports = Spy