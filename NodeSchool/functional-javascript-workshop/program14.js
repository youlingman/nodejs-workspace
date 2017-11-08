function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    if (num <= 0) return;
    if (num > 100) {
        trampoline(operation);
        return repeat(operation, num - 100);
    }
    operation();
    return repeat(operation, --num)
}

// todo not a trampoline-solution here
// reference:
// https://en.wikipedia.org/wiki/Trampoline_(computing)
// http://raganwald.com/2013/03/28/trampolines-in-javascript.html
function trampoline(fn) {
    // You probably want to implement a trampoline!
    for (var i = 0; i < 100; i++) {
        fn();
    }
}

module.exports = function (operation, num) {
    // You probably want to call your trampoline here!
    return repeat(operation, num)
}